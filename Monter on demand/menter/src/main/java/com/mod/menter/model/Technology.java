package com.mod.menter.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Technology {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long techId;
	private String name;
	private String description;
	 
	public long getTechId() {
		return techId;
	}
	public void setTechId(long techId) {
		this.techId = techId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
