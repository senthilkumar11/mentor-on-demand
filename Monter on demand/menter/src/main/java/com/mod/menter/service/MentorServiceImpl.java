package com.mod.menter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mod.menter.dao.LoginDao;
import com.mod.menter.dao.MentorDao;
import com.mod.menter.model.Login;
import com.mod.menter.model.Mentor;

@Service
public class MentorServiceImpl implements MentorService{
	@Autowired
	MentorDao mentorDao;
	@Autowired
	LoginDao loginDao;
	@Override
	public void registerMentor(Mentor mentor) throws Exception {
		Login login=new Login();
		login.setUserName(mentor.getMailId());
		login.setPassword(mentor.getPassword());
		login.setUserType("MENTOR");
	loginDao.save(login);
	mentorDao.save(mentor);
		
	}
	public List<Mentor> getMentor() throws Exception {
	
		return mentorDao.findAll();
	}
	public Mentor getMentorByEmail(String email) throws Exception {
		return mentorDao.findByMailId(email);
	}

}
