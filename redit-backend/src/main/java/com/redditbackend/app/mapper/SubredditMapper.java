package com.redditbackend.app.mapper;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.redditbackend.app.dto.SubredditDTO;
import com.redditbackend.app.model.Post;
import com.redditbackend.app.model.Subreddit;

@Mapper(componentModel = "spring")
public interface SubredditMapper {

	SubredditMapper INSTANCE = Mappers.getMapper(SubredditMapper.class);

	@Mapping(target = "numberOfPosts", expression = "java(mapPosts(subreddit.getPosts()))")
	SubredditDTO mapSubredditDto(Subreddit subreddit);

	@InheritInverseConfiguration
	@Mapping(target = "posts", ignore = true)
	Subreddit mapSubredditModel(SubredditDTO subredditDto);

	default Integer mapPosts(List<Post> numberOfPosts) {
		return numberOfPosts.size();
	}
}
