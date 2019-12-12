package com.example.oop.Repositories;

import java.util.Optional;

import com.example.oop.Models.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
public interface UserRepository extends JpaRepository<User, String>{
    
    public Optional<User> findByUserName(String userName);

}