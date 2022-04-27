package com.redditbackend.app.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.redditbackend.app.dto.SubredditDTO;
import com.redditbackend.app.exceptions.SpringRedditException;
import com.redditbackend.app.mapper.SubredditMapper;
import com.redditbackend.app.model.Subreddit;
import com.redditbackend.app.repository.SubredditRepository;
import static java.util.stream.Collectors.toList;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@AllArgsConstructor
@Service
@Slf4j
public class SubredditService {
	private final SubredditRepository subredditRepository;
	private final SubredditMapper subredditMapper;

	@Transactional
	public SubredditDTO save(SubredditDTO subredditDTO) {
		Subreddit save = subredditRepository.save(subredditMapper.mapSubredditModel(subredditDTO));
		subredditDTO.setId(save.getId());
		return subredditDTO;
	}

	@Transactional(readOnly = true)
	public List<SubredditDTO> getAll() {
		return subredditRepository.findAll().stream().map(subredditMapper::mapSubredditDto).collect(toList());
	}

	public SubredditDTO getSubreddit(Long id) {
		Subreddit subreddit = subredditRepository.findById(id)
				.orElseThrow(() -> new SpringRedditException("No Subreddit found with id " + String.valueOf(id)));
		return subredditMapper.mapSubredditDto(subreddit);
	}
}
