package com.cognizant.springlearn.controller;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START authenticate");
        LOGGER.debug("authHeader: {}", authHeader);

        String user = getUser(authHeader);
        String token = generateJwt(user);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        LOGGER.info("END authenticate");
        return response;
    }

    private String getUser(String authHeader) {
        LOGGER.info("START getUser");
        String encodedCredentials = authHeader.substring("Basic ".length()).trim();
        byte[] credDecoded = Base64.getDecoder().decode(encodedCredentials);
        String credentials = new String(credDecoded, StandardCharsets.UTF_8);
        String[] values = credentials.split(":", 2);
        String user = values[0];
        LOGGER.debug("User extracted: {}", user);
        LOGGER.info("END getUser");
        return user;
    }

    private String generateJwt(String user) {
        LOGGER.info("START generateJwt");
        JwtBuilder builder = Jwts.builder();
        builder.setSubject(user);
        builder.setIssuedAt(new Date());
        builder.setExpiration(new Date((new Date()).getTime() + 1200000)); // 20 minutes
        builder.signWith(SignatureAlgorithm.HS256, "secretkey");
        String token = builder.compact();
        LOGGER.info("END generateJwt");
        return token;
    }
}
