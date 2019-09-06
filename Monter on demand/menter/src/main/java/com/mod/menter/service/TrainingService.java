package com.mod.menter.service;

import java.util.List;

import com.mod.menter.model.Training;

public interface TrainingService {

	void setTraining(Training training)throws Exception;

	List<Training> getAllTraining()throws Exception;

	List<Training> findTrainingByMentorEmail(String email)throws Exception;

	List<Training> findTrainingByUserEmail(String email)throws Exception;
}
