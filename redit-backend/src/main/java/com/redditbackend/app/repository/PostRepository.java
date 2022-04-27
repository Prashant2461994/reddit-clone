package com.redditbackend.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.redditbackend.app.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

}
