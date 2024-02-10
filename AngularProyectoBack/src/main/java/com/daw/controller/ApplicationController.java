package com.daw.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daw.model.Videojuego;
import com.daw.service.Servicio;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/formularios")
public class ApplicationController {
	
	@Autowired
	private Servicio servicio;
	
	@GetMapping("/videojuegos/{id}")
	public ResponseEntity<Optional<Videojuego>> busquedaVideojuego(@PathVariable("id") Long id){
		return ResponseEntity.ok().body(servicio.busquedaVideojuego(id));
	}
	
	@GetMapping("/videojuegos")
	public ResponseEntity<List<Videojuego>> findAll(){
		return ResponseEntity.ok().body(servicio.findAll());
	}
	
	@DeleteMapping("/videojuegos/{id}")
	public void eliminarVideojuego(@PathVariable("id") Long id){
		servicio.eliminarVideojuego(id);
	}
	
	@PostMapping("/videojuegos/{nombre}")
	public ResponseEntity<Videojuego> crearVideojuego(@PathVariable("nombre") String nombre){
		return ResponseEntity.ok().body(servicio.crearVideojuego(nombre));
	}
	
	@PutMapping("/videojuegos/{id}/{nombre}")
	public ResponseEntity<Optional<Videojuego>> modificarVideojuego(@PathVariable("nombre") String nombre,
														  			@PathVariable("id") Long id){
		Optional<Videojuego> videojuegoModificado = servicio.modificarVideojuego(nombre, id);
		
		if (videojuegoModificado != null) {
            return ResponseEntity.ok().body(videojuegoModificado);
        } else {
            return ResponseEntity.notFound().build();
        }
	}
}