package com.mod.menter.service;

import java.util.List;

import com.mod.menter.model.Mentor;

public interface MentorService {

	void registerMentor(Mentor mentor)throws Exception;

	List<Mentor> getMentor()throws Exception;

	Mentor getMentorByEmail(String email)throws Exception;

}
