package com.redditbackend.app.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.redditbackend.app.dto.VoteDTO;
import com.redditbackend.app.service.VoteService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/votes/")
@AllArgsConstructor
public class VoteController {

	private final VoteService voteService;

	@PostMapping
	public ResponseEntity<Void> vote(@RequestBody VoteDTO voteDto) {
		voteService.vote(voteDto);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}