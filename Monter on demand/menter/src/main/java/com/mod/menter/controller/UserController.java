package com.mod.menter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mod.menter.model.User;
import com.mod.menter.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	@Autowired
	UserService userService;
	@PostMapping("/registeruser")
	public void registerUser(@RequestBody User user) throws Exception
	{
		userService.registerUser(user);
	}
	
}
