package com.redditbackend.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.redditbackend.app.dto.PostRequest;
import com.redditbackend.app.dto.PostResponse;
import com.redditbackend.app.model.Post;
import com.redditbackend.app.model.Subreddit;
import com.redditbackend.app.model.User;

@Mapper(componentModel = "spring")
public interface PostMapper {

	@Mapping(target = "createdDate", expression = "java(java.time.Instant.now())")
	@Mapping(target = "subreddit", source = "subreddit")
	@Mapping(target = "description", source = "postRequest.description")
	@Mapping(target = "user", source = "user")
	public abstract Post mapPost(PostRequest postRequest, Subreddit subreddit, User user);

	@Mapping(target = "id", source = "postId")
	@Mapping(target = "postName", source = "postName")
	@Mapping(target = "url", source = "url")
	@Mapping(target = "description", source = "description")
	@Mapping(target = "userName", source = "user.username")
	@Mapping(target = "subredditName", source = "subreddit.name")
	public abstract PostResponse mapPostDto(Post post);
}
