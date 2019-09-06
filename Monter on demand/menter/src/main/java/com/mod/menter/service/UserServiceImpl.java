package com.mod.menter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.mod.menter.dao.LoginDao;
import com.mod.menter.dao.UserDao;
import com.mod.menter.model.Login;
import com.mod.menter.model.User;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserDao userDao;
	@Autowired
	LoginDao loginDao;
	@Override
	public void registerUser(User user) throws Exception {
		Login login=new Login();
		login.setUserName(user.getMailId());
		login.setPassword(user.getPassword());
		login.setUserType("USER");
	loginDao.save(login);
	userDao.save(user);
	}
	@Override
	public List<User> getUsers() throws Exception {
		
		return userDao.findAll();
	}
	@Override
	public User getUserByEmail(String email) throws Exception {
		return userDao.findByMailId(email);
	}
	


}
