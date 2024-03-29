package com.atabekyan.image.service.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping(path = "/api/v1/logout")
public class LogoutController {

    @PostMapping
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response){
        SecurityContextHolder.clearContext();
        HttpSession session = request.getSession(false);

        if(isSessionExist(session)) {
            session.invalidate();
        }

        for(Cookie cookie : request.getCookies()) {
            cookie.setMaxAge(0);
        }

        return ResponseEntity.noContent().build();
    }

    private static boolean isSessionExist(HttpSession session) {
        return session != null;
    }

    @GetMapping("/success")
    public ResponseEntity<?> successLogout(){
        return ResponseEntity.noContent().build();
    }
}
