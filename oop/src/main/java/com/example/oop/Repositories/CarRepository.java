
package com.example.oop.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.oop.Models.Car;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface CarRepository extends JpaRepository<Car, String> {

    // custom query to search to blog post by title or content
    // List<Car> findCarByMakeAndId(String make);
    
}