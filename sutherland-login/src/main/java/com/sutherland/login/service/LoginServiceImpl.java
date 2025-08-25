package com.sutherland.login.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sutherland.login.entity.LoginEntity;
import com.sutherland.login.repo.LoginRepo;

@Service  
public class LoginServiceImpl implements LoginService {
    
    @Autowired
    LoginRepo repo;

    @Override
    public void addUser(LoginEntity login) {
        Optional<LoginEntity> existingUser = repo.findById(login.getUserId());
        if (!existingUser.isPresent()) {
            repo.save(login);
        }
    }

    @Override
    public LoginEntity getUserById(int userId) {
        Optional<LoginEntity> user = repo.findById(userId);
        return user.orElse(null); 
    }

    public boolean validateUser(String username, String password) {
        Optional<LoginEntity> user = repo.findByUserName(username); 
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return true;
        }
        return false;
    }
}