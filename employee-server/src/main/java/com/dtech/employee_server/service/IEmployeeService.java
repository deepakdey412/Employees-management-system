package com.dtech.employee_server.service;

import com.dtech.employee_server.entity.Employee;
import com.dtech.employee_server.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IEmployeeService implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public IEmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        Optional<Employee> existingEmployee = employeeRepository.findById(id);
        if (existingEmployee.isPresent()) {
            Employee emp = existingEmployee.get();
            emp.setName(employee.getName());
            emp.setEmail(employee.getEmail());
            emp.setDepartment(employee.getDepartment());
            return employeeRepository.save(emp);
        } else {
            throw new RuntimeException("Employee not found with id " + id);
        }
    }

    @Override
    public String deleteEmplpoyee(Long id) {
        employeeRepository.deleteById(id);
        return "Employee deleted successfully with id " + id;
    }
}
