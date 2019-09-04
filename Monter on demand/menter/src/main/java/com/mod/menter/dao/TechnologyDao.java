package com.mod.menter.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mod.menter.model.Technology;

public interface TechnologyDao extends JpaRepository<Technology, Integer> {

}
