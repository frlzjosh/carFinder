package com.example.oop;

import java.util.logging.Logger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com.example.oop", "com.example.oop.Controllers"})
@EnableJpaRepositories("com.example.oop.Repositories")
@EntityScan("com.example.oop.Models")
// @EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
public class OopApplication extends SpringBootServletInitializer {
	private static final Logger log = Logger.getLogger(OopApplication.class.getName());

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
  		log.info("Your information log message.");
		return application.sources(OopApplication.class);
	}
	public static void main(String[] args) {
		SpringApplication.run(OopApplication.class, args);
	}

	

}



