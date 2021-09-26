package com.lithan.KynProject.KYN.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lithan.KynProject.KYN.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {

	Users findByuserName(String userName);

}
