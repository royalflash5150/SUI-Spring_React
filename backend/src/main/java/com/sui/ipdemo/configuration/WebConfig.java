//package com.sui.ipdemo.configuration;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//@EnableWebMvc
//public class WebConfig implements WebMvcConfigurer {
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//
//        registry.addMapping("/api/**")
//                .allowedOrigins("https://localhost:3000")
//                .allowedMethods("PUT", "DELETE", "GET", "POST", "OPTIONS")
//                .allowedHeaders("Origin", "Content-Type", "Accept")
////                .exposedHeaders("header1", "header2")
//                .allowCredentials(true).maxAge(3600);
//    }
//}