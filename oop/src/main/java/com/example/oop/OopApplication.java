package com.example.oop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com.example.oop", "com.example.oop.Controllers"})
@EnableJpaRepositories("com.example.oop.Repositories")
@EntityScan("com.example.oop.Models")
// @EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
public class OopApplication {

	public static void main(String[] args) {
		SpringApplication.run(OopApplication.class, args);
	}

}
