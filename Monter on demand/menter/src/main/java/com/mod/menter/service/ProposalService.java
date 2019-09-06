package com.mod.menter.service;

import java.util.List;

import com.mod.menter.model.Proposals;
import com.mod.menter.model.User;

public interface ProposalService {

	void setProposal(Proposals proposals)throws Exception;

	List<Proposals> getAllProposals()throws Exception;

	List<Proposals> findProposeByMentorEmail(String email)throws Exception;

	List<Proposals> findProposeByUserEmail(String email)throws Exception;

}
