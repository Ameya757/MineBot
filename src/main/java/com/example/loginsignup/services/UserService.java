package com.example.loginsignup.services;

import com.example.loginsignup.model.User;
import com.example.loginsignup.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User registerUser(User user) {
        Optional<User> userFromDb = userRepository.findByEmail(user.getEmail());
        if (userFromDb.isPresent()) {
            throw new IllegalStateException("Email Already Exists!");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Optional<User> loginUser(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        return user.filter(u -> passwordEncoder.matches(password, u.getPassword()));
    }
}
