package com.redditbackend.app.dto;

import java.time.Instant;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentsDTO {
	private Long id;
	private Long postId;
	private Instant createdDate;
	private String text;
	private String userName;
}
