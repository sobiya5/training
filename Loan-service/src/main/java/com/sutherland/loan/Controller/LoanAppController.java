package com.sutherland.loan.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sutherland.loanapp.entity.Loan;
import com.sutherland.loanservice.LoanService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/loan")
public class LoanAppController {

    @Autowired
    LoanService service;

    @PostMapping
    public ResponseEntity<String> addLoan(@RequestBody Loan loan) {
        service.addLoan(loan);
        return new ResponseEntity<>("Loan details inserted successfully", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Loan>> getAllLoans() {
        List<Loan> loans = service.getAllLoans();
        return new ResponseEntity<>(loans, HttpStatus.OK);
    }

    @GetMapping("/byid/{loanId}")
    public ResponseEntity<Loan> getLoanById(@PathVariable Long loanId) {
        Loan loan = service.getLoanById(loanId);
        return new ResponseEntity<>(loan, HttpStatus.OK);
    }
}

