package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.AuthRequest;
import com.cognizant.springlearn.model.AuthResponse;
import com.cognizant.springlearn.util.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class AuthenticationController {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @PostMapping("/authenticate")
    public AuthResponse authenticate(@RequestBody AuthRequest authRequest) {
        logger.info("Authentication request received for user: {}", authRequest.getUsername());

        if ("admin".equals(authRequest.getUsername()) && "admin".equals(authRequest.getPassword())) {
            logger.info("Successful authentication for user: {}", authRequest.getUsername());
            String token = JwtUtil.generateToken(authRequest.getUsername());
            return new AuthResponse(token);
        } else {
            logger.warn("Failed authentication attempt for user: {}", authRequest.getUsername());
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
        }
    }
}
