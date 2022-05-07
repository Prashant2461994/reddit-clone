package com.redditbackend.app.mapper;

import com.redditbackend.app.dto.CommentsDTO;
import com.redditbackend.app.model.Comment;
import com.redditbackend.app.model.Post;
import com.redditbackend.app.model.User;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-08T00:08:52+0530",
    comments = "version: 1.3.1.Final, compiler: Eclipse JDT (IDE) 1.4.50.v20210914-1429, environment: Java 17.0.2 (Eclipse Adoptium)"
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

        commentsDTO.setCreatedDate( comment.getCreatedDate() );
        commentsDTO.setId( comment.getId() );
        commentsDTO.setText( comment.getText() );

        commentsDTO.setUserName( comment.getUser().getUsername() );
        commentsDTO.setPostId( comment.getPost().getPostId() );

        return commentsDTO;
    }
}
