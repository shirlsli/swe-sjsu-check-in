package org.swesjsu.checkin.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;

@RestController
@RequestMapping("/")
public class AuthController {

    @GetMapping
    public Map<String, Object> currentUser(OAuth2AuthenticationToken token) {
        return token.getPrincipal().getAttributes();
    }

    // https://www.baeldung.com/spring-security-5-oauth2-login
    // https://spring.io/guides/tutorials/spring-boot-oauth2/ "How to Add a Local User Database" section
    
}
