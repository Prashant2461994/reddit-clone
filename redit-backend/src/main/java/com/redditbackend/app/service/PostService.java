package com.redditbackend.app.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.redditbackend.app.dto.PostRequest;
import com.redditbackend.app.exceptions.SubredditNotFoundException;
import com.redditbackend.app.mapper.PostMapper;
import com.redditbackend.app.model.Post;
import com.redditbackend.app.model.Subreddit;
import com.redditbackend.app.model.User;
import com.redditbackend.app.repository.SubredditRepository;

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

	public Post save(PostRequest postRequest) {
		Subreddit subreddit = subredditRepository.findByName(postRequest.getPostName()).orElseThrow(() -> new SubredditNotFoundException(postRequest.getSubredditName()));
		User currentUser = authService.getCurrentUser();
		return postMapper.map(postRequest, subreddit, currentUser);
	}
}
