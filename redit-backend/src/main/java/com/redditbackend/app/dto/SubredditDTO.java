package com.redditbackend.app.dto;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Slf4j
@Getter
@Setter
public class SubredditDTO {
	private Long id;
	private String name;
	private String description;
	private Integer numberOfPosts;
	
	
	public static void main(String[] args) throws JsonProcessingException {
		ObjectMapper mapper = new ObjectMapper();
		SubredditDTO dto = new SubredditDTO();
		dto.setDescription("This is test description");
		dto.setName("test-name");
		dto.setNumberOfPosts(2);
		log.info(mapper.writeValueAsString(dto));
		
	}
}
