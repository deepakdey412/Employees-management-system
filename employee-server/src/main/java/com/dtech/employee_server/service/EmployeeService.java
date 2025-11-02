package com.dtech.employee_server.service;

import com.dtech.employee_server.entity.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);
    List<Employee>  getAllEmployee();
    Employee updateEmployee(Long id , Employee employee);
    String deleteEmplpoyee(Long id);

}
