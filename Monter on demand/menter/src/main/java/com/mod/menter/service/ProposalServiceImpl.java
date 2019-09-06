package com.mod.menter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mod.menter.dao.ProposalsDao;
import com.mod.menter.model.Proposals;
import com.mod.menter.model.User;

@Service
public class ProposalServiceImpl implements ProposalService {
	@Autowired
	ProposalsDao proposalDao;
	
	public void setProposal(Proposals proposals) throws Exception {
		proposalDao.save(proposals);
	}

	public List<Proposals> getAllProposals() throws Exception {
		return proposalDao.findAll();
	}

	@Override
	public List<Proposals> findProposeByMentorEmail(String email) throws Exception {
		return proposalDao.findByMentorEmail(email);
	}
	public List<Proposals> findProposeByUserEmail(String email) throws Exception {
		return proposalDao.findByUserEmail(email);
	}


}
