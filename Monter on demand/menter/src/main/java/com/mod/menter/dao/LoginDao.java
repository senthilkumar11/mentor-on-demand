package com.mod.menter.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mod.menter.model.Login;

public interface LoginDao extends JpaRepository<Login, Integer> {

}
