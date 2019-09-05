package com.mod.menter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mod.menter.model.Technology;
import com.mod.menter.model.User;
import com.mod.menter.service.TechnologyService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TechnologyController {
	@Autowired
	TechnologyService technologyService;
	@GetMapping("/techlist")
	public List<Technology> techlist() throws Exception
	{
		return technologyService.getTech();
	}
	@PostMapping("/addtech")
	public void addTech(@RequestBody Technology tech) throws Exception
	{
		System.out.println(tech.getName());
		technologyService.addTech(tech);
	}
	
}
