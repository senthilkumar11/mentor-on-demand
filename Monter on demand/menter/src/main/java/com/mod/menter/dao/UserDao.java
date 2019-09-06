package com.mod.menter.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mod.menter.model.User;

public interface UserDao extends JpaRepository<User, Integer> {

	User findByMailId(String email);

}
