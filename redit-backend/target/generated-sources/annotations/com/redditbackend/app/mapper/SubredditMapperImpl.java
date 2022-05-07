package com.redditbackend.app.mapper;

import com.redditbackend.app.dto.SubredditDTO;
import com.redditbackend.app.dto.SubredditDTO.SubredditDTOBuilder;
import com.redditbackend.app.model.Subreddit;
import com.redditbackend.app.model.Subreddit.SubredditBuilder;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-07T23:51:44+0530",
    comments = "version: 1.3.1.Final, compiler: Eclipse JDT (IDE) 1.4.50.v20210914-1429, environment: Java 17.0.2 (Eclipse Adoptium)"
)
@Component
public class SubredditMapperImpl implements SubredditMapper {

    @Override
    public SubredditDTO mapSubredditDto(Subreddit subreddit) {
        if ( subreddit == null ) {
            return null;
        }

        SubredditDTOBuilder subredditDTO = SubredditDTO.builder();

        subredditDTO.description( subreddit.getDescription() );
        subredditDTO.id( subreddit.getId() );
        subredditDTO.name( subreddit.getName() );

        subredditDTO.numberOfPosts( mapPosts(subreddit.getPosts()) );

        return subredditDTO.build();
    }

    @Override
    public Subreddit mapSubredditModel(SubredditDTO subredditDto) {
        if ( subredditDto == null ) {
            return null;
        }

        SubredditBuilder subreddit = Subreddit.builder();

        subreddit.description( subredditDto.getDescription() );
        subreddit.id( subredditDto.getId() );
        subreddit.name( subredditDto.getName() );

        return subreddit.build();
    }
}
