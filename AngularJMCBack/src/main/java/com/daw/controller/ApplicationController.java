package com.daw.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.daw.model.Partida;
import com.daw.model.Usuario;
import com.daw.service.Servicio;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ApplicationController {
	
	@Autowired
	private Servicio servicio;
	
	@GetMapping("/partidas")
	public ResponseEntity<Partida> busquedaPartida(@RequestParam("nombreUsuario1") String nombreUsuario1, @RequestParam("password1") String password1, @RequestParam("nombreUsuario2") String nombreUsuario2, @RequestParam("password2") String password2){
		return ResponseEntity.ok().body(servicio.findPartidaByUser1AndUser2(nombreUsuario1, password1, nombreUsuario2, password2));
	}
	
	@PostMapping("/partidas")
	public ResponseEntity<Partida> guardarPartida(@RequestBody Map<String,String> params){
		Usuario usuario1 = servicio.findUsuarioById(Long.valueOf(params.get( "idUsuario1")));
		Usuario usuario2 = servicio.findUsuarioById(Long.valueOf(params.get( "idUsuario2")));
		return ResponseEntity.ok().body(servicio.guardarPartida(usuario1, usuario2, Integer.valueOf(params.get("contador1")), Integer.valueOf(params.get("contador2"))));
	}
	
	@GetMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> busquedaUsuarioById(@PathVariable("id") Long id){
		return ResponseEntity.ok().body(servicio.busquedaUsuarioById(id));
	}
	
	@PostMapping("/usuarios")
	public ResponseEntity<Usuario> creacionUsuario(@RequestBody Usuario usuario){
		try {
		return ResponseEntity.ok().body(servicio.crearUsuario(usuario));
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
}