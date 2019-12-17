package com.example.oop.Controllers;

import com.example.oop.Models.User;

import org.junit.Test;
import org.junit.runner.RunWith;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringRunner.class)
@WebMvcTest(value = UserController.class, secure = false)
public class UserController{

    @Autowired
    private MockMvc mock;

    User userMock = new User("ab123", "felixTheMan", "felix", "rab");

    @Test 
    public void postUserInfo() throws Exception{
        
        RequestBuilder request = MockMvcRequestBuilders
            .post("/createUser")
            .accept(MediaType.APPLICATION_JSON)
            .content("{\"userID\"ab123,\"userName\":\"felixTheMan\",\"firstName\"felix,\"lastName\":rab}")
            .contentType(MediaType.APPLICATION_JSON);


        MvcResult result = (MvcResult)mock.perform(request)
            .andExpect(
                status().isOk()
            );
    }
    
}

