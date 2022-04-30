package com.redditbackend.app.mapper;

import java.util.Optional;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;

import com.github.marlonlom.utilities.timeago.TimeAgo;

import com.redditbackend.app.dto.PostRequest;
import com.redditbackend.app.dto.PostResponse;
import com.redditbackend.app.model.Post;
import com.redditbackend.app.model.Subreddit;
import com.redditbackend.app.model.User;
import com.redditbackend.app.model.Vote;
import com.redditbackend.app.model.VoteType;
import com.redditbackend.app.repository.CommentRepository;
import com.redditbackend.app.repository.VoteRepository;
import com.redditbackend.app.service.AuthService;

@Mapper(componentModel = "spring")
public abstract class PostMapper {

	@Autowired
	private CommentRepository commentRepository;
	@Autowired
	private VoteRepository voteRepository;
	@Autowired
	private AuthService authService;

	@Mapping(target = "createdDate", expression = "java(java.time.Instant.now())")
	@Mapping(target = "description", source = "postRequest.description")
	@Mapping(target = "subreddit", source = "subreddit")
	@Mapping(target = "voteCount", constant = "0")
	@Mapping(target = "user", source = "user")
	public abstract Post mapPost(PostRequest postRequest, Subreddit subreddit, User user);

	@Mapping(target = "id", source = "postId")
	@Mapping(target = "postName", source = "postName")
	@Mapping(target = "url", source = "url")
	@Mapping(target = "description", source = "description")
	@Mapping(target = "userName", source = "user.username")
	@Mapping(target = "subredditName", source = "subreddit.name")
	public abstract PostResponse mapPostDto(Post post);

	Integer commentCount(Post post) {
		return commentRepository.findByPost(post).size();
	}

	String getDuration(Post post) {
		return TimeAgo.using(post.getCreatedDate().toEpochMilli());
	}

	boolean isPostUpVoted(Post post) {
		return checkVoteType(post, VoteType.UPVOTE);
	}

	boolean isPostDownVoted(Post post) {
		return checkVoteType(post, VoteType.UPVOTE);
	}

	private boolean checkVoteType(Post post, VoteType voteType) {
		if (authService.isLoggedIn()) {
			Optional<Vote> voteForPostByUser = voteRepository.findTopByPostAndUserOrderByVoteIdDesc(post,
					authService.getCurrentUser());
			return voteForPostByUser.filter(vote -> vote.getVoteType().equals(voteType)).isPresent();
		}
		return false;
	}

}
