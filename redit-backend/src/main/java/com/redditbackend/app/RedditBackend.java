package com.redditbackend.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;

import com.redditbackend.app.config.AppConfig;
@EnableConfigurationProperties(AppConfig.class)
@SpringBootApplication
@EnableJpaRepositories
@EnableAsync
public class RedditBackend {

	public static void main(String[] args) {
		SpringApplication.run(RedditBackend.class, args);
	}

}
