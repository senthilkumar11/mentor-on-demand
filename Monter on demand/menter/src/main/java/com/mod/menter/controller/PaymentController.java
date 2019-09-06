package com.mod.menter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mod.menter.model.Proposals;
import com.mod.menter.model.User;
import com.mod.menter.service.ProposalService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PaymentController {
	@Autowired
	ProposalService proposalService;
	
	@GetMapping("/getproposals")
	public List<Proposals> getAllProposals() throws Exception
	{
		return proposalService.getAllProposals();
	}
	@PostMapping("/setproposal")
	public void setProposal(@RequestBody Proposals proposals) throws Exception
	{
		proposalService.setProposal(proposals);
	}
	@GetMapping("/findproposebymentor/{email}")
	public List<Proposals> findProposeByMentorEmail(@PathVariable String email) throws Exception
	{
		return proposalService.findProposeByMentorEmail(email);
	}

	@GetMapping("/findproposebyuser/{email}")
	public List<Proposals> findProposeByUserEmail(@PathVariable String email) throws Exception
	{
		return proposalService.findProposeByUserEmail(email);
	}
}
