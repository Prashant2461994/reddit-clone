package com.redditbackend.app.dto;

import com.redditbackend.app.model.VoteType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class VoteDTO {
	private VoteType voteType;
	private Long postId;
}
