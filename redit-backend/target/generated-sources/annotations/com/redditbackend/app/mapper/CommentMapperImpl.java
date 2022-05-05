package com.redditbackend.app.mapper;

import com.redditbackend.app.dto.CommentsDTO;
import com.redditbackend.app.model.Comment;
import com.redditbackend.app.model.Post;
import com.redditbackend.app.model.User;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-05T17:20:38+0530",
    comments = "version: 1.3.1.Final, compiler: javac, environment: Java 11.0.15 (Private Build)"
)
@Component
public class CommentMapperImpl implements CommentMapper {

    @Override
    public Comment map(CommentsDTO commentsDto, Post post, User user) {
        if ( commentsDto == null && post == null && user == null ) {
            return null;
        }

        Comment comment = new Comment();

        if ( commentsDto != null ) {
            comment.setText( commentsDto.getText() );
        }
        if ( post != null ) {
            comment.setPost( post );
        }
        if ( user != null ) {
            comment.setUser( user );
        }
        comment.setCreatedDate( java.time.Instant.now() );

        return comment;
    }

    @Override
    public CommentsDTO mapToDto(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentsDTO commentsDTO = new CommentsDTO();

        commentsDTO.setId( comment.getId() );
        commentsDTO.setCreatedDate( comment.getCreatedDate() );
        commentsDTO.setText( comment.getText() );

        commentsDTO.setUserName( comment.getUser().getUsername() );
        commentsDTO.setPostId( comment.getPost().getPostId() );

        return commentsDTO;
    }
}
