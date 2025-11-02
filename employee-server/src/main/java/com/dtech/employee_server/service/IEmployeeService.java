package com.dtech.employee_server.service;

import com.dtech.employee_server.entity.Employee;
import com.dtech.employee_server.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IEmployeeService  implements  EmployeeService{
    private final EmployeeRepository employeeRepository;

    public IEmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    @Override
    public Employee createEmployee(Employee employee) {
        return null;
    }

    @Override
    public List<Employee> getAllEmployee() {
        return List.of();
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        return null;
    }

    @Override
    public String deleteEmplpoyee(Long id) {
        return "";
    }
}
