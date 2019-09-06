package com.mod.menter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mod.menter.dao.LoginDao;
import com.mod.menter.model.Login;
import com.mod.menter.model.Technology;
import com.mod.menter.model.User;
import com.mod.menter.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	@Autowired
	UserService userService;
	@Autowired
	LoginDao loginDao;
	@PostMapping("/registeruser")
	public void registerUser(@RequestBody User user) throws Exception
	{
		userService.registerUser(user);
	}
	@GetMapping("/getlogin")
	public List<Login> loginList() throws Exception
	{
		return loginDao.findAll();
	}
	@GetMapping("userlist")
	public List<User> userlist() throws Exception
	{
		return userService.getUsers();
	}
	@GetMapping("/finduser/{email}")
	public User findUserByEmail(@PathVariable String email) throws Exception
	{
		return userService.getUserByEmail(email);
	}
}
