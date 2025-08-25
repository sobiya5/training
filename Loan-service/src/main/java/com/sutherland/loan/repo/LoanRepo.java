package com.sutherland.loan.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sutherland.loanapp.entity.Loan;

@Repository
public interface LoanRepo extends JpaRepository<Loan, Long> {

}
