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
import org.springframework.web.bind.annotation.RestController;

import com.daw.model.Animal;
import com.daw.service.AnimalService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Controller {

	@Autowired
	AnimalService animalService;

	// Obtener todos los alumnos

	@GetMapping("/animales")
	public ResponseEntity<List<Animal>> obtenerAnimales() {
		return ResponseEntity.ok().body(animalService.obtenerAnimales());

	}

	// Obtener animal con id pasado por parametros

	@GetMapping("/animales/{id}")
	public ResponseEntity<Animal> obtenerAnimal(@PathVariable Long id) {
		return ResponseEntity.ok().body(animalService.obtenerAnimal(id));

	}
	
	// Registrar animal nuevo
	
	@PostMapping("/animales")
	public ResponseEntity<Animal> crearAnimal (@RequestBody Animal animalNuevo) {
		return ResponseEntity.ok().body(animalService.crearAnimal(animalNuevo));
	}

	// Modificar animal por su id

	@PutMapping("/animales/{id}")
	public ResponseEntity<Animal> actualizarAlumno(
			@PathVariable Long id, @RequestBody Animal animalActualizado) {
		return ResponseEntity.ok().body(
				animalService.actualizarAnimal(id, animalActualizado));
	}
	
	// Eliminar animal por su id
	
	@DeleteMapping("/animales/{id}")
	public ResponseEntity<String> eliminarAnimal (@PathVariable Long id) {
		return ResponseEntity.ok().body(animalService.eliminarAnimal(id));
	}

}
