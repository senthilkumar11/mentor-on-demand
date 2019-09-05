package com.mod.menter.service;

import java.util.List;

import com.mod.menter.model.Technology;

public interface TechnologyService {

	List<Technology> getTech( )throws Exception;

	void addTech(Technology tech)throws Exception;

}
