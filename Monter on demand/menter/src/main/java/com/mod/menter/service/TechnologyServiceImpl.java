package com.mod.menter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mod.menter.dao.TechnologyDao;
import com.mod.menter.model.Technology;

@Service
public class TechnologyServiceImpl implements TechnologyService {
	@Autowired
	TechnologyDao technologyDao;
	@Override
	public List<Technology> getTech() throws Exception {
		return technologyDao.findAll();
	}
	@Override
	public void addTech(Technology tech) throws Exception {
		technologyDao.save(tech);
	}

}
