package com.mod.menter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.mod.menter.model.Login;
import com.mod.menter.service.AdminService;
import com.mod.menter.service.AdminServiceImpl;

@SpringBootApplication
public class MenterApplication {

	public static void main(String[] args) throws Exception {

		SpringApplication.run(MenterApplication.class, args);

	}
	

}
