package com.example.oop;

import javax.servlet.http.HttpServletRequest;

import com.okta.spring.boot.oauth.Okta;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class OktaConfig extends WebSecurityConfigurerAdapter{
    @Override  
    public void configure(HttpSecurity http) throws Exception {  
        http  
            .authorizeRequests()
            .anyRequest()
            .authenticated()
            .and()
            .oauth2ResourceServer()
            .jwt();
        Okta.configureResourceServer401ResponseBody(http);
    }
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }
    
    RequestMatcher csrfRequestMatcher = new RequestMatcher() {
        private AntPathRequestMatcher[] requestMatchers = {
            new AntPathRequestMatcher("/**/verify"),
            new AntPathRequestMatcher("/**/login*")
        };
        @Override
        public boolean matches(final HttpServletRequest request) {
            // If the request match one url the CSFR protection will be enabled
            for (final AntPathRequestMatcher rm : requestMatchers) {
                if (rm.matches(request)) {
                    System.out.println();
                    /* return true; */
                }
            }
            return false;
        } // method matches
    };
}