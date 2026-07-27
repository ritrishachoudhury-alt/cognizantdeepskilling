package com.cognizant.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AuthController {

    @GetMapping("/authenticate")
    public Map<String,String> authenticate() {

        return Map.of(
                "token",
                "eyJhbGciOiJIUzI1NiJ9.dummy.jwt.token"
        );
    }
}