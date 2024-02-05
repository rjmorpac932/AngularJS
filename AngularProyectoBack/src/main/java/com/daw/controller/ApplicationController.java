package com.daw.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.daw.model.Usuario;
import com.daw.service.Servicio;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/formularios")
public class ApplicationController {
	
	@Autowired
	private Servicio servicio;
	
	@GetMapping("/usuarios")
	public ResponseEntity<List<Usuario>> busquedaUsuarioGeneral(@RequestParam(name = "usuario", required = false) String usuario, @RequestParam(name= "nombreCompleto", required = false) String nombreCompleto){
		return ResponseEntity.ok().body(servicio.busquedaUsuarioGeneral(usuario, nombreCompleto));
	}
	
	@GetMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> busquedaUsuarioById(@PathVariable("id") Long id){
		return ResponseEntity.ok().body(servicio.busquedaUsuarioById(id));
	}
	
	@DeleteMapping("/usuarios")
	public ResponseEntity<String> eliminarUsuarios(){
		servicio.eliminarUsuarios();
		return ResponseEntity.ok().body("Usuarios eliminados correctamente");
	}
}