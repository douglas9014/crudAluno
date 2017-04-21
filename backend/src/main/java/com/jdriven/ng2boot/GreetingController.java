package com.jdriven.ng2boot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class GreetingController {
    //private static final String template = "Hello, %s!";
    //private final AtomicLong counter = new AtomicLong();

    @CrossOrigin // Evita que o navegador bloqueie requisições vindas de domínios diferentes
    @RequestMapping("/greeting") // Define o caminho inicial do aplicativo
    public Greeting greeting(@RequestParam(value="name", defaultValue="Diego") String name) {
        return new Greeting(1,
        			//counter.incrementAndGet(),
                            String.format(name));

    }
}
