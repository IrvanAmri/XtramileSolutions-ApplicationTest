package com.xtramilesolutions.models;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student, String> {
    Optional<Student> findByKunci(int kunci);
}
