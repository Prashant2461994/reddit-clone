package com.redditbackend.app.service;

import static java.util.stream.Collectors.toList;

import java.util.List;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.redditbackend.app.dto.CommentsDTO;
import com.redditbackend.app.exceptions.PostNotFoundException;
import com.redditbackend.app.exceptions.SpringRedditException;
import com.redditbackend.app.mapper.CommentMapper;
import com.redditbackend.app.model.Comment;
import com.redditbackend.app.model.NotificationEmail;
import com.redditbackend.app.model.Post;
import com.redditbackend.app.model.User;
import com.redditbackend.app.repository.CommentRepository;
import com.redditbackend.app.repository.PostRepository;
import com.redditbackend.app.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CommentsService {

	private static final String POST_URL = "";
	private final PostRepository postRepository;
	private final UserRepository userRepository;
	private final AuthService authService;
	private final CommentMapper commentMapper;
	private final CommentRepository commentRepository;
	private final MailContentBuilder mailContentBuilder;
	private final MailService mailService;

	public void save(CommentsDTO commentsDto) {
		Post post = postRepository.findById(commentsDto.getPostId())
				.orElseThrow(() -> new PostNotFoundException(commentsDto.getPostId().toString()));
		Comment comment = commentMapper.map(commentsDto, post, authService.getCurrentUser());
		commentRepository.save(comment);
		String message = mailContentBuilder
				.build(post.getUser().getUsername() + " posted a comment on your post." + POST_URL);
		sendCommentNotification(message, post.getUser());
	}

	private void sendCommentNotification(String message, User user) {
		mailService.sendMail(
				new NotificationEmail(user.getUsername() + " Commented on your post", user.getEmail(), message));
	}

	public List<CommentsDTO> getAllCommentsForPost(Long postId) {
		Post post = postRepository.findById(postId).orElseThrow(() -> new PostNotFoundException(postId.toString()));
		return commentRepository.findByPost(post).stream().map(commentMapper::mapToDto).collect(toList());
	}

	public List<CommentsDTO> getAllCommentsForUser(String userName) {
		User user = userRepository.findByUsername(userName).orElseThrow(() -> new UsernameNotFoundException(userName));
		return commentRepository.findAllByUser(user).stream().map(commentMapper::mapToDto).collect(toList());
	}

	public boolean containsSwearWords(String comment) {
		if (comment.contains("shit")) {
			throw new SpringRedditException("Comments contains unacceptable language");
		}
		return false;
	}
}
