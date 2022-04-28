package com.redditbackend.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.redditbackend.app.model.Post;
import com.redditbackend.app.model.User;
import com.redditbackend.app.model.Vote;

public interface VoteRepository extends JpaRepository<Vote, Long> {
	Optional<Vote> findTopByPostAndUserOrderByVoteIdDesc(Post post, User currentUser);

}
