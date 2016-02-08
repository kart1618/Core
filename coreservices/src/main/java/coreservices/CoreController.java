package coreservices;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class CoreController
{
    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}