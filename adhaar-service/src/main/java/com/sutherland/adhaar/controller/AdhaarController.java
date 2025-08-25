package com.sutherland.adhaar.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sutherland.adhaar.entity.Adhaar;
import com.sutherland.adhar.service.AdhaarService;



//import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/adhaar")
public class AdhaarController {
	@Autowired
	AdhaarService service;
	
	@PostMapping
	public ResponseEntity<String> addDetails(@RequestBody Adhaar ad){
		service.addDetails(ad);
		return new ResponseEntity<String>("inserted",HttpStatus.OK);
	}
	@GetMapping
	public ResponseEntity<List<Adhaar>> getAll(){
		List<Adhaar> list = service.getAll();
		return new ResponseEntity<List<Adhaar>>(list,HttpStatus.OK);
	}
	
	@GetMapping("/byadhaar/{adhaar}")
	public ResponseEntity<Adhaar> getAdhaarByAdhaar(@PathVariable int adhaar){
		Adhaar ad = service.getAdhaarByAdhaar(adhaar);
		return new ResponseEntity<Adhaar>(ad,HttpStatus.OK);
	}
}

