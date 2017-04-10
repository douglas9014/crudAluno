package com.jdriven.ng2boot;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
 //E isso
//@RequestMapping("/aluno")
public class AlunoController {

	
    //@RequestMapping("/aluno")
	/*public Aluno aluno(@RequestParam(value="name", defaultValue="José") String name) {
        return new Aluno(599,
                        String.format(name),
                        "Male");
    }
    */
	
	private Map<Integer, Aluno> alunos;
	  
	public AlunoController() {
	  alunos = new HashMap<Integer, Aluno>();
	 
	  Aluno a1 = new Aluno(1, "José", "Male");
	  Aluno a2 = new Aluno(2, "Paulão", "Male");
	  Aluno a3 = new Aluno(3, "Ro", "Female");
	 
	  alunos.put(1, a1);
	  alunos.put(2, a2);
	  alunos.put(3, a3);
	}
	 
	@CrossOrigin
	@RequestMapping(value = "/alunos", method = RequestMethod.GET)
	public ResponseEntity<List<Aluno>> listar() {
	  return new ResponseEntity<List<Aluno>>(new ArrayList<Aluno>(alunos.values()), HttpStatus.OK);
	}
	
	/*
    @RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Aluno> addAluno(@RequestBody Aluno aluno) {
		//empService.save(employee);
		//logger.debug("Added:: " + aluno);
		return new ResponseEntity<Aluno>(aluno, HttpStatus.CREATED);
	}
	*/
}


//counter.incrementAndGet(),
