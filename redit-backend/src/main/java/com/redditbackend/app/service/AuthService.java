package com.redditbackend.app.service;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.redditbackend.app.dto.AuthenticationResponse;
import com.redditbackend.app.dto.LoginRequest;
import com.redditbackend.app.dto.RegisterRequest;
import com.redditbackend.app.exceptions.SpringRedditException;
import com.redditbackend.app.model.NotificationEmail;
import com.redditbackend.app.model.User;
import com.redditbackend.app.model.VerificationToken;
import com.redditbackend.app.repository.UserRepository;
import com.redditbackend.app.repository.VerificationTokenRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class AuthService {

	private final PasswordEncoder passwordEncoder;
	private final UserRepository userRepository;
	private final VerificationTokenRepository verificationTokenRepository;
	private final MailService mailService;
	private final AuthenticationManager authenticationManager;
	private final JwtProvider jwtProvider;

	@Transactional
	public void signup(RegisterRequest registerRequest) {
		User user = User.builder()
				   .username(registerRequest.getUsername())
				   .email(registerRequest.getEmail())
				   .password(passwordEncoder
			       .encode(registerRequest.getPassword())).created(Instant.now()).enabled(false)
				   .build();

		userRepository.save(user);

		String verficationToken = generateVerificationToken(user);
		mailService.sendMail(new NotificationEmail("Please Activate your account", user.getEmail(),
				"Thank you for SigningUp to SpringReddit. Please click on the below url to activate your account : http://localhost:8080/api/auth/accountVerification/"
						+ verficationToken));
	}

	private String generateVerificationToken(User user) {
		String verificationToken = UUID.randomUUID().toString();
		VerificationToken vToken = VerificationToken.builder().user(user).token(verificationToken).build();
		verificationTokenRepository.save(vToken);
		return verificationToken;
	}

	public void verifyAccount(String token) {
		Optional<VerificationToken> verificationToken = verificationTokenRepository.findByToken(token);
		verificationToken.orElseThrow(() -> new SpringRedditException("Invalid Token"));
		fetchUserAndEnable(verificationToken.get());
	}

	@Transactional
	private void fetchUserAndEnable(VerificationToken verificationToken) {
		String username = verificationToken.getUser().getUsername();
		User user = userRepository.findByUsername(username).orElseThrow(() -> new SpringRedditException("User not found" + username));
		user.setEnabled(true);
		userRepository.save(user);
	}

	public AuthenticationResponse login(LoginRequest loginRequest) {
		Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authenticate);
		String jwtToken = jwtProvider.generateToken(authenticate);
		log.info("JWT Token {} ", jwtToken);
		return new AuthenticationResponse(jwtToken, loginRequest.getUsername());

	}

	@Transactional(readOnly = true)
	public User getCurrentUser() {
		Jwt principal = (Jwt) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return userRepository.findByUsername(principal.getSubject()).orElseThrow(() -> new UsernameNotFoundException("User name not found - " + principal.getSubject()));
	}

}
