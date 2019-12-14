package com.example.oop;

import java.util.logging.Logger;
import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


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
	@Bean
    public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(Collections.singletonList("https://car-app.netlify.com/**"));
        config.setAllowedMethods(Collections.singletonList("*"));
        config.setAllowedHeaders(Collections.singletonList("*"));
        source.registerCorsConfiguration("/**", config);
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<CorsFilter>(new CorsFilter(source));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return bean;
    }

}



