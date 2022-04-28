package com.redditbackend.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.redditbackend.app.model.Comment;
import com.redditbackend.app.model.Post;
import com.redditbackend.app.model.User;

public interface CommentRepository extends JpaRepository<Comment, Long> {
	List<Comment> findByPost(Post post);
	List<Comment> findAllByUser(User user);
}
