package com.core.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CoreController
{
    @RequestMapping("/hello")
    @ResponseBody
    public String index() {
        return "Greetings from Spring Boot!";
    }
}