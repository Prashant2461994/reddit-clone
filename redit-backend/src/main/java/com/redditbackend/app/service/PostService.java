package com.redditbackend.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.redditbackend.app.dto.PostRequest;
import com.redditbackend.app.dto.PostResponse;
import com.redditbackend.app.exceptions.PostNotFoundException;
import com.redditbackend.app.exceptions.SubredditNotFoundException;
import com.redditbackend.app.mapper.PostMapper;
import com.redditbackend.app.model.Post;
import com.redditbackend.app.model.Subreddit;
import com.redditbackend.app.repository.PostRepository;
import com.redditbackend.app.repository.SubredditRepository;
import static java.util.List.*;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
@Transactional
public class PostService {

	private final SubredditRepository subredditRepository;
	private final AuthService authService;
	private final PostMapper postMapper;
	private final PostRepository postRepository;

	public Post save(PostRequest postRequest) {
		Subreddit subreddit = subredditRepository.findByName(postRequest.getPostName())
				.orElseThrow(() -> new SubredditNotFoundException(postRequest.getSubredditName()));
		return postRepository.save(postMapper.mapPost(postRequest, subreddit, authService.getCurrentUser()));
	}

	@Transactional(readOnly = true)
	public PostResponse getPost(Long id) {
		Post post = postRepository.findById(id).orElseThrow(() -> new PostNotFoundException(id.toString()));
		return postMapper.mapPostDto(post);
	}

	@Transactional(readOnly = true)
	public List<PostResponse> getAllPosts() {
		return postRepository.findAll().stream().map(postMapper::mapPostDto).collect(Collectors.toList());
	}
}
