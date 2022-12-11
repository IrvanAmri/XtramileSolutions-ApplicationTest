package com.xtramilesolutions.services;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.xtramilesolutions.dto.ResponseData;
import com.xtramilesolutions.dto.StudentData;
import com.xtramilesolutions.models.Student;
import com.xtramilesolutions.models.StudentRepo;


@Service
public class StudentService {
    private final StudentRepo studentRepo;

    public StudentService(StudentRepo studentRepo){
        this.studentRepo = studentRepo;
    }

    public ResponseData<Student> addStudent(Student student){
        ResponseData<Student> res = new ResponseData<>();
        if(studentRepo.findById(student.getId()).isPresent()){
            //send error
            res.setState(false);
            res.setPayload(null);
            res.getMessages().add("student with this id has been registered");
            return res;
        }
        else{
            //add
            Student studentReturn = studentRepo.save(student);
            res.setState(true);
            res.setPayload(studentReturn);
            res.getMessages().add("success!");
            return res;
        }
    }

    public ResponseData<Student> editStudent(Student student){
        ResponseData<Student> res = new ResponseData<>();
        if(studentRepo.findById(student.getId()).isPresent()){
            //editable
            Student studentReturn = studentRepo.save(student);
            res.setState(true);
            res.setPayload(studentReturn);
            res.getMessages().add("success!");
            return res;
        }
        else{
            //send error
            res.setState(false);
            res.setPayload(null);
            res.getMessages().add("student does not exist");
            return res;
        }
    }

    public List<StudentData> getAllStudent(){
        List<StudentData> res = new ArrayList<>();
        List<Student> students =  studentRepo.findAll();
        for (Student student : students) {
            int umur = Period.between(student.getTanggalLahir(), LocalDate.now()).getYears();
            StudentData data = new StudentData(
                student.getId(), 
                student.getNamaDepan()+" "+student.getNamaBelakang(), 
                umur
            );
            res.add(data);
        }
        return res;
    }

    public ResponseData<?> deleteStudentById(String id){
        ResponseData<?> res = new ResponseData<>();
        if(studentRepo.findById(id).isPresent()){
            //delete
            studentRepo.deleteById(id);;
            res.setState(true);
            res.setPayload(null);
            res.getMessages().add("success!");
            return res;
        }
        else{
            //send error
            res.setState(false);
            res.setPayload(null);
            res.getMessages().add("student does not exist");
            return res;
        }
    }
}
