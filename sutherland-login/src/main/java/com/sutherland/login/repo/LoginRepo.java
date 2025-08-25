
package com.sutherland.login.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sutherland.login.entity.LoginEntity;

@Repository

public interface LoginRepo  extends JpaRepository<LoginEntity, Integer> {
	
	Optional<LoginEntity> findByUserName(String userName);

}