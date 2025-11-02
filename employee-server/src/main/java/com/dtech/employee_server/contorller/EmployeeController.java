package com.dtech.employee_server.contorller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/employee" , produces = MediaType.APPLICATION_JSON_VALUE)
public class EmployeeController {
    @GetMapping("/get")
    public String get(){
        return "Deeepak";
    }
}
