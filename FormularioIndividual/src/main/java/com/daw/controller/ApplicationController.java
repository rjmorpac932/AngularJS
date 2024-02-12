package com.daw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.daw.model.Lenguaje;
import com.daw.service.Servicio;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/formularios")
public class ApplicationController {

	@Autowired
	private Servicio servicio;

	@GetMapping("/lenguajes")
	public ResponseEntity<Lenguaje> busquedaLenguaje(@RequestParam(name = "nombre", required = true) String nombre) {
		return ResponseEntity.ok().body(servicio.busquedaLenguaje(nombre));
	}

	/*
	 * @PutMapping("/actualizarLenguaje/{id}") public ResponseEntity<Lenguaje>
	 * modificarLenguaje(@PathVariable("id") Long id, @RequestBody Lenguaje
	 * lenguajeActualizado){ return
	 * ResponseEntity.ok().body(servicio.modificarLenguaje(id,
	 * lenguajeActualizado)); }
	 */
}