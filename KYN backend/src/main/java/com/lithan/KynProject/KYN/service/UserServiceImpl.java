package com.lithan.KynProject.KYN.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lithan.KynProject.KYN.model.Users;
import com.lithan.KynProject.KYN.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepo;

	@Override
	public Users addUser(Users users) {

		return userRepo.save(users);
	}

//	@Override
//	public Users checkuser_pass(String userName, String userPassword) {
//	
//		Users users = userRepo.findByuserName(userName);
//
//		if (users == null) {
//			System.out.println("No Users. Username is wrong");
//			return null;
//		}
//
//		if (users != null) {
//			String realpass = users.getUserPassword();
//			if (realpass.equals(userPassword)) {
//				System.out.println("2nd Method- Password is Match");
//			} else {
//				System.out.println("2nd Method- Password is Not Match");
//				return null;
//			}
//		}
//		return users;
//	}

}