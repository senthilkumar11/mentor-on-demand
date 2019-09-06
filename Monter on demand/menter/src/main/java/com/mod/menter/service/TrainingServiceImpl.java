package com.mod.menter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mod.menter.dao.TrainingDao;
import com.mod.menter.model.Training;
@Service
public class TrainingServiceImpl implements TrainingService {
	@Autowired
	TrainingDao trainingDao;
	public void setTraining(Training training) throws Exception {
	
		trainingDao.save(training);
	}

	public List<Training> getAllTraining() throws Exception {
	
		return trainingDao.findAll();
	}


	public List<Training> findTrainingByMentorEmail(String email) throws Exception {
	
		return trainingDao.findByMentorEmail(email);
	}


	public List<Training> findTrainingByUserEmail(String email) throws Exception {
		
		return trainingDao.findByUserEmail(email);
	}

}
