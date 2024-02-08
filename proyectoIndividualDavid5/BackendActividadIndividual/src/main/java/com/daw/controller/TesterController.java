package com.daw.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.daw.model.Usuarios;
import com.daw.service.TesterService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/formularios")
public class TesterController {
	
	@Autowired
	private TesterService servicio;
	
	@GetMapping("/usuarios")
	public ResponseEntity<Usuarios> findUsuariosByUsuarioANDPassword(@RequestParam("usuario") String codigo, @RequestParam("password") String password){
		return ResponseEntity.ok().body(servicio.findUsuariosByUsuarioANDPassword(codigo, password));
	}
	
	@PostMapping("/usuarios")
	public ResponseEntity<Usuarios> createUsuario(@RequestBody Usuarios usuarios){
		return ResponseEntity.ok().body(servicio.createUsuario(usuarios.getNombre(), usuarios.getUsuario(), usuarios.getEmail(), usuarios.getPassword(), usuarios.getFechaNacimiento()));
	}
	
	@GetMapping("/allUsuarios")
	public ResponseEntity<List<Usuarios>> findAllUsuarios(){
		return ResponseEntity.ok().body(servicio.findAllUsuarios());
	}
	
	@PutMapping("/usuarios")
	public ResponseEntity<Usuarios> modificarUsuariosPorEmail(@RequestParam("email") String email, @RequestBody Usuarios usuarios){
		return ResponseEntity.ok().body(servicio.modificarUsuariosPorEmail(email, usuarios.getUsuario()));
	}
	
	@DeleteMapping("/usuarios/{id}")
	public ResponseEntity<Usuarios> eliminarUsuariosById(@PathVariable("id") Long id){
		return ResponseEntity.ok().body(servicio.eliminiarUsuariosById(id));
	}

}