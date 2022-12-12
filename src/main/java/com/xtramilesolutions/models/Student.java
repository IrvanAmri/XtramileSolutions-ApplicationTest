package com.xtramilesolutions.models;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Student {
    @Id
    private String id;
    @GeneratedValue(
        strategy = GenerationType.AUTO
    )
    @Column(nullable = false)
    private int kunci;
    private String namaDepan;
    private String namaBelakang;
    private LocalDate tanggalLahir;
}
