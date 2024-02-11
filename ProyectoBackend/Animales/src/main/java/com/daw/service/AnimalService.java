package com.daw.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.model.Animal;
import com.daw.repository.AnimalRepository;

@Service
public class AnimalService {

	@Autowired
	private AnimalRepository animalRepo;

	// Obtener los animales

	public List<Animal> obtenerAnimales() {
		return animalRepo.findAll();
	}

	// Obtener animal con id pasado por parametros

	public Animal obtenerAnimal(Long id) {
		return animalRepo.findById(id).get();
	}
	
	// Registrar animal nuevo
	
	public Animal crearAnimal (Animal animalNuevo) {
		return animalRepo.save(animalNuevo);
	}

	// Modificar animal por su id

	public Animal actualizarAnimal(Long id, Animal animalActualizado) {

		Animal animal = animalRepo.getReferenceById(id);

		animal.setNombre(animalActualizado.getNombre());
		animal.setEspecie(animalActualizado.getEspecie());
		animal.setPeso(animalActualizado.getPeso());
		animal.setAltura(animalActualizado.getAltura());
		animal.setReproduccion(animalActualizado.getReproduccion());

		return animalRepo.save(animal);
	}
	
	// Eliminar Animal por su id
	
	public String eliminarAnimal (Long id) {
		Animal animal = animalRepo.findById(id).get();
		if (animal != null) {
			animalRepo.delete(animal);
			return "OK";
		} else {
			return "ERROR";
		}
		
	}

}
