package com.example.oop.Repositories;

import java.util.List;

// import java.util.Optional;

import com.example.oop.Models.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String>{
    
    public List<User> findAllById(String id);
    
}