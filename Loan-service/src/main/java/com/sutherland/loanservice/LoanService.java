package com.sutherland.loanservice;

import java.util.List;
import com.sutherland.loanapp.entity.Loan;
public interface LoanService {
    void addLoan(Loan loan);
    List<Loan> getAllLoans();
    Loan getLoanById(Long loanId);
}

