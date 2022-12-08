package com.xtramilesolutions.models;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    @Id
    private String id;
    private String namaDepan;
    private String namaBelakang;
    private LocalDate tanggalLahir;
}
