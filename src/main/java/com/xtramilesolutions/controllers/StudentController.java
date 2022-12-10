package com.xtramilesolutions.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xtramilesolutions.dto.ResponseData;
import com.xtramilesolutions.models.Student;
import com.xtramilesolutions.services.StudentService;

@RestController
@RequestMapping("/api/students")
@CrossOrigin
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService){
        this.studentService = studentService;
    }

    @PostMapping
    public ResponseEntity<ResponseData<Student>> addStudent(@RequestBody Student student){
        ResponseData<Student> res = studentService.addStudent(student);
        if(res.isState()){
            //state true
            return ResponseEntity.ok().body(res);
        }
        else{
            //state false
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
        }
    }

    @PutMapping
    public ResponseEntity<ResponseData<Student>> editStudent(@RequestBody Student student){
        ResponseData<Student> res = studentService.editStudent(student);
        if(res.isState()){
            //state true
            return ResponseEntity.ok().body(res);
        }
        else{
            //state false
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
        }
    }

    @GetMapping
    public ResponseEntity<ResponseData<?>> getAllStudent(){
        List<Student> listStudent = studentService.getAllStudent();
        ResponseData<List<Student>> res = new ResponseData<>();
        res.setState(true);
        res.setPayload(listStudent);
        return ResponseEntity.ok().body(res);
    }

    @DeleteMapping
    public ResponseEntity<ResponseData<?>> deleteStudent(@RequestBody String id){
        ResponseData<?> res = studentService.deleteStudentById(id);
        if(res.isState()){
            //state true
            return ResponseEntity.ok().body(res);
        }
        else{
            //state false
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
        }
    }

}
