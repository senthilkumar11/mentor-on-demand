package com.mod.menter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mod.menter.model.Training;
import com.mod.menter.service.TrainingService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TrainingController {
	@Autowired
	TrainingService trainingService;
	
	@GetMapping("/gettraining")
	public List<Training> getAllTraining() throws Exception
	{
		return trainingService.getAllTraining();
	}
	@PostMapping("/settraining")
	public void setTraining(@RequestBody Training training) throws Exception
	{
		System.out.println(training);
		trainingService.setTraining(training);
		}
	@GetMapping("/findtrainingbymentor/{email}")
	public List<Training> findtrainingByMentorEmail(@PathVariable String email) throws Exception
	{
		return trainingService.findTrainingByMentorEmail(email);
	}

	@GetMapping("/findtrainingbyuser/{email}")
	public List<Training> findTrainingByUserEmail(@PathVariable String email) throws Exception
	{
		return trainingService.findTrainingByUserEmail(email);
	}
}
