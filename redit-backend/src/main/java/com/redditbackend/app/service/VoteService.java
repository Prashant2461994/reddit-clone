package com.redditbackend.app.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.redditbackend.app.dto.VoteDTO;
import com.redditbackend.app.exceptions.PostNotFoundException;
import com.redditbackend.app.exceptions.SpringRedditException;
import com.redditbackend.app.model.Post;
import com.redditbackend.app.model.Vote;
import com.redditbackend.app.model.VoteType;
import com.redditbackend.app.repository.PostRepository;
import com.redditbackend.app.repository.VoteRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class VoteService {

	private final VoteRepository voteRepository;
	private final PostRepository postRepository;
	private final AuthService authService;

	@Transactional
	public void vote(VoteDTO voteDto) {
		Post post = postRepository.findById(voteDto.getPostId())
				.orElseThrow(() -> new PostNotFoundException("Post Not Found with ID - " + voteDto.getPostId()));
		Optional<Vote> voteByPostAndUser = voteRepository.findTopByPostAndUserOrderByVoteIdDesc(post,
				authService.getCurrentUser());

		if (voteByPostAndUser.isPresent() && voteByPostAndUser.get().getVoteType().equals(voteDto.getVoteType())) {
			throw new SpringRedditException("You have already " + voteDto.getVoteType() + "'d for this post");
		}

		if (VoteType.UPVOTE.equals(voteDto.getVoteType())) {
			post.setVoteCount(post.getVoteCount() + 1);
		} else {
			post.setVoteCount(post.getVoteCount() - 1);
		}
		voteRepository.save(mapToVote(voteDto, post));
		postRepository.save(post);
	}

	private Vote mapToVote(VoteDTO voteDto, Post post) {
		return Vote.builder().voteType(voteDto.getVoteType()).post(post).user(authService.getCurrentUser()).build();
	}
}