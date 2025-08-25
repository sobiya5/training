package com.sutherland.login.service;

import com.sutherland.login.entity.LoginEntity;

public interface LoginService {
	
	void addUser(LoginEntity login);
	LoginEntity getUserById(int userId);
	public boolean validateUser(String username, String password);
	

}
