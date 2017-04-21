package com.jdriven.ng2boot;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.web.bind.annotation.CrossOrigin;

import jdbc.dao.AlunoDAO;
import java.sql.SQLException;

@RestController
//@RequestMapping("/aluno") // Define o caminho inicial do aplicativo.
public class AlunoController {
	// Código do projeto de exemplo "Greeting" (web service):
	// public Aluno aluno(@RequestParam(value="name", defaultValue="José") String name) {
  //       return new Aluno(599,
  //                       String.format(name),
  //                       "Male");
  //   }

	private Map<Integer, Aluno> alunos;
	private AlunoDAO alunoDao = new AlunoDAO();

	public AlunoController() throws SQLException {
	  alunos = new HashMap<Integer, Aluno>();

		/* Inserção manual de registros na memória:
	  Aluno a1 = new Aluno(1, "José", "Male");
	  Aluno a2 = new Aluno(2, "Paulão", "Male");
	  Aluno a3 = new Aluno(3, "Ro", "Female");
	  Aluno a4 = new Aluno(4, "Douglas", "Male");
	  Aluno a5 = new Aluno(5, "Flaquer", "Male");

	  alunos.put(1, a1);
	  alunos.put(2, a2);
	  alunos.put(3, a3);
	  alunos.put(4, a4);
	  alunos.put(5, a5);
	   */
	}

	@CrossOrigin // Evita que navegadores bloqueiem requisições vindas de domínios diferentes.
	@RequestMapping(value = "/alunos", method = RequestMethod.GET) // Define o caminho e o método da requisição HTTP atendida
	public ResponseEntity<List<Aluno>> listar() throws SQLException {
		List<Aluno> alunosGet = new ArrayList<Aluno>();
		alunos = new HashMap<Integer, Aluno>();
		alunosGet = alunoDao.getLista(); // Busca todos os registros do BD e grava na lista [alunosGet]

		for (Aluno alu : alunosGet) { // Coloca todos alunos vindos do SELECT da DAO em um hashmap
			alunos.put(alu.getId(), alu);
		}
		// Retorna a lista de registros de alunos e responde a requisição HTTP com um "OK" (200):
		return new ResponseEntity<List<Aluno>>(new ArrayList<Aluno>(alunos.values()), HttpStatus.OK);
	}

	@CrossOrigin
	@RequestMapping(value = "/alunos/{id}", method = RequestMethod.GET)
	public ResponseEntity<Aluno> buscar(@PathVariable("id") Integer id) throws SQLException {
	  //Aluno aluno = alunos.get(id);
	  Aluno aluno = alunoDao.getAluno(id); // Busca um determinado aluno

	  if (aluno == null) { // Se não encontrar nenhum...
	    return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Retorna resposta HTTP 404 (não encontrado)
	  }else{ // Senão...
			return new ResponseEntity<Aluno>(aluno, HttpStatus.OK); // Retorna o registro encontrado e a respota HTTP 200 (OK)
		}
	}

	@CrossOrigin
	@RequestMapping(value = "/alunos/{id}", method = RequestMethod.DELETE) // Recebe requisição HTTP de método DELETE
	public ResponseEntity<?> deletar(@PathVariable("id") int id) {
		alunoDao.excluir(id); // O DAO cuida da exclusão.

		//List<Aluno> alunosGet = new ArrayList<Aluno>();
		//String idConfirm = "";
	  //Aluno aluno = alunos.remove(id);

	  //System.out.println("Deleeeeeeeeeeete");

	  //if (aluno == null) {
	  //	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	  //}

	  return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
 /*
	@CrossOrigin
	@RequestMapping(value = "/alunos/", method = RequestMethod.POST)
	public ResponseEntity<?> adicionar(@PathVariable("id") int id) {
	  Aluno aluno = alunos.remove(id);

	  if (aluno == null) {
	    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	  }

	  return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
*//*
	@CrossOrigin
	@RequestMapping(value = "/alunos", method = RequestMethod.POST)
	public ResponseEntity<Aluno> addAluno(@RequestBody Aluno aluno) {
		System.out.println("Before put");
		Aluno aluConfirm = alunos.put(aluno.getId(), aluno);

		System.out.println("After put " + aluno.getName());
		//empService.save(employee);
		//logger.debug("Added:: " + aluno);
		return new ResponseEntity<Aluno>(aluConfirm, HttpStatus.CREATED);
	}

	*/

	@CrossOrigin
	@RequestMapping(value = "/alunos", method = RequestMethod.POST) //Esse metodo recebe uma String em formato de JSON
	public ResponseEntity<Aluno> addAluno(@RequestBody String alunoJSON) throws JsonParseException, JsonMappingException, IOException, SQLException {
		System.out.println("Before put");

		Aluno aluno = new ObjectMapper().readValue(alunoJSON, Aluno.class); //Aqui o json é convertido em objeto Java Aluno
		//Aluno aluConfirm = alunos.put(aluno.getId(), aluno);
		System.out.println("After put " + alunoJSON);
		alunoDao.adiciona(aluno);

		//empService.save(employee);
		//logger.debug("Added:: " + aluno);
		return new ResponseEntity<Aluno>(aluno, HttpStatus.CREATED); //Aqui ele retorna o objecto aluno como confirmação que deu tudo certo, lá no t ele vai tranformar em JSON novamente
	}
	/*
	@CrossOrigin
	@RequestMapping(value = "/alunos", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> createAluno(@RequestBody Aluno aluno) {

		System.out.println("After put " + aluno.getName());
		return ResponseEntity.ok(aluno);
		//return new ResponseEntity<Aluno>(aluno, HttpStatus.CREATED);
    }
	*/
}
