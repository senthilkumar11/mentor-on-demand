package com.mod.menter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mod.menter.model.Mentor;
import com.mod.menter.model.Technology;
import com.mod.menter.model.User;
import com.mod.menter.service.MentorService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MentorController {
	@Autowired
	MentorService mentorService;
	
	@PostMapping("/registermentor")
	public void registerMentor(@RequestBody Mentor mentor) throws Exception
	{
		mentorService.registerMentor(mentor);
	}
	@GetMapping("/mentorlist")
	public List<Mentor> mentorlist() throws Exception
	{
		return mentorService.getMentor();
	}
	@GetMapping("/findmentor/{email}")
	public Mentor findByMenterEmail(@PathVariable String email) throws Exception
	{
		return mentorService.getMentorByEmail(email);
	}

}
