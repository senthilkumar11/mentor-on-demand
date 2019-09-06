package com.mod.menter.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mod.menter.model.Mentor;

public interface MentorDao extends JpaRepository<Mentor, Integer>{

	Mentor findByMailId(String email);

}
