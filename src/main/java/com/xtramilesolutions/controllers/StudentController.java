package com.xtramilesolutions.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.xtramilesolutions.dto.ResponseData;
import com.xtramilesolutions.dto.StudentData;
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
        List<StudentData> listStudent = studentService.getAllStudent();
        ResponseData<List<StudentData>> res = new ResponseData<>();
        res.setState(true);
        res.setPayload(listStudent);
        return ResponseEntity.ok().body(res);
    }

    @GetMapping("/{kunci}")
    public ResponseEntity<ResponseData<StudentData>> getStudentByKunci(@PathVariable int kunci){
        StudentData res = studentService.findStudentByKunci(kunci);
        ResponseData<StudentData> dataRes = new ResponseData<>();
        dataRes.setState(true);
        dataRes.getMessages().add("success!");
        dataRes.setPayload(res);
        return ResponseEntity.ok().body(dataRes);
    }

    @DeleteMapping
    public ResponseEntity<ResponseData<?>> deleteStudent(@RequestParam("nim") String id){
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
