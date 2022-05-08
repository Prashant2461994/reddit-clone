package com.redditbackend.app.mapper;

import com.redditbackend.app.dto.SubredditDTO;
import com.redditbackend.app.dto.SubredditDTO.SubredditDTOBuilder;
import com.redditbackend.app.model.Subreddit;
import com.redditbackend.app.model.Subreddit.SubredditBuilder;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-08T11:09:27+0530",
    comments = "version: 1.3.1.Final, compiler: javac, environment: Java 11.0.15 (Private Build)"
)
@Component
public class SubredditMapperImpl implements SubredditMapper {

    @Override
    public SubredditDTO mapSubredditDto(Subreddit subreddit) {
        if ( subreddit == null ) {
            return null;
        }

        SubredditDTOBuilder subredditDTO = SubredditDTO.builder();

        subredditDTO.id( subreddit.getId() );
        subredditDTO.name( subreddit.getName() );
        subredditDTO.description( subreddit.getDescription() );

        subredditDTO.numberOfPosts( mapPosts(subreddit.getPosts()) );

        return subredditDTO.build();
    }

    @Override
    public Subreddit mapSubredditModel(SubredditDTO subredditDto) {
        if ( subredditDto == null ) {
            return null;
        }

        SubredditBuilder subreddit = Subreddit.builder();

        subreddit.id( subredditDto.getId() );
        subreddit.name( subredditDto.getName() );
        subreddit.description( subredditDto.getDescription() );

        return subreddit.build();
    }
}
