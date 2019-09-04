package com.mod.menter.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mod.menter.dao.UserDao;
import com.mod.menter.model.User;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserDao userDao;
	@Override
	public void registerUser(User user) throws Exception {
	userDao.save(user);
	}

}
