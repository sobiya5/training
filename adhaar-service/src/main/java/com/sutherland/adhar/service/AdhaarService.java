package com.sutherland.adhar.service;

import java.util.List;

import com.sutherland.adhaar.entity.Adhaar;
public interface AdhaarService {

	
		void addDetails(Adhaar adhaar);
		List<Adhaar> getAll();
		Adhaar getAdhaarByAdhaar(int adhaar);
	}

