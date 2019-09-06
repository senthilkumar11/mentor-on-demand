package com.mod.menter.service;

import java.util.List;

import com.mod.menter.model.User;

public interface UserService {
public void registerUser(User user)throws Exception;

public List<User> getUsers()throws Exception;

public User getUserByEmail(String email)throws Exception;
}
