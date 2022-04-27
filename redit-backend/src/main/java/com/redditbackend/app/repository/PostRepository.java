package com.redditbackend.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.redditbackend.app.model.Post;
import com.redditbackend.app.model.Subreddit;
import com.redditbackend.app.model.User;

public interface PostRepository extends JpaRepository<Post, Long> {
	List<Post> findAllBySubreddit(Subreddit subreddit);

	List<Post> findByUser(User user);
}
