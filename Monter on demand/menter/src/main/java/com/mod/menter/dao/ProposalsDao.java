package com.mod.menter.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mod.menter.model.Proposals;
import com.mod.menter.model.User;

public interface ProposalsDao extends JpaRepository<Proposals, Integer> {

	List<Proposals> findByMentorEmail(String email);

	List<Proposals> findByUserEmail(String email);

}
