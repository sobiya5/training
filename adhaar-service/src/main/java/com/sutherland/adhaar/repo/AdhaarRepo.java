package com.sutherland.adhaar.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sutherland.adhaar.entity.Adhaar;
@Repository
public interface AdhaarRepo extends JpaRepository<Adhaar, String> {

}






