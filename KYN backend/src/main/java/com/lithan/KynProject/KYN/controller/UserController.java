package com.lithan.KynProject.KYN.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lithan.KynProject.KYN.model.Users;
import com.lithan.KynProject.KYN.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@PostMapping("/api")
	public Users addUser(@RequestBody Users users) {
		users.setUserPassword(bCryptPasswordEncoder.encode(users.getUserPassword()));
		return userService.addUser(users);
	}


//	@PostMapping(value = "/api/login")
//	public Users userlogin(@RequestBody Users loginuser) {
//
//		System.out.println("The login email is " + loginuser.getUserName());
//		System.out.println("The login password is " + loginuser.getUserPassword());
//
//		String loginuserName = loginuser.getUserName();
//		String loginuserPassword = loginuser.getUserPassword();
//
//		Users users = userService.checkuser_pass(loginuserName, loginuserPassword);
//
//		return users;
//	}

}
