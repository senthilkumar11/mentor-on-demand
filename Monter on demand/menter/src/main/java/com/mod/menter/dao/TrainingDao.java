package com.mod.menter.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mod.menter.model.Training;

public interface TrainingDao extends JpaRepository<Training, Integer> {
	List<Training> findByMentorEmail(String email);

	List<Training> findByUserEmail(String email);
}
