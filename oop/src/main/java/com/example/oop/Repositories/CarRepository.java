
package com.example.oop.Repositories;

import org.jboss.logging.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.example.oop.Models.Car;
import com.example.oop.Models.UserCar;


@Repository
public interface CarRepository extends JpaRepository<Car, String> {

    // custom query to search to blog post by title or content
    List<Car> findAllByUserID(String userID);

    List<Car> removeByIdAndUserID(int id, String userID);
    
}