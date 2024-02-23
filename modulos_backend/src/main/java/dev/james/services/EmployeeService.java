package dev.james.services;


import dev.james.entities.Employee;

import dev.james.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService implements  IEmployeeService {

    @Autowired
    private EmployeeRepository repository;

    @Override
    public List<Employee> getAll(){
        return (List<Employee>) repository.findAll();
    }

    @Override
    public Employee getById(Long id) {
        return (Employee) repository.findById(id).get();
    }

    @Override
    public void remove(Long id){
        repository.deleteById(id);
    }

    @Override
    public void save(Employee employee){
        repository.save(employee);
    }

}
