package com.daw.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.model.Videojuego;
import com.daw.repository.VideojuegoRepository;

import lombok.Data;

@Service
@Data
public class Servicio {
	
	@Autowired
	VideojuegoRepository VRepository;
	
	public Optional<Videojuego> busquedaVideojuego(Long id){
		return VRepository.findById(id);
	}
	
	public List<Videojuego> findAll(){
		return VRepository.findAll();
	}
	
	public void eliminarVideojuego(Long id) {
		VRepository.deleteById(id);
	}
	
	public Videojuego crearVideojuego(String nombre) {
		Videojuego videojuego = new Videojuego();
        
		videojuego.setNombre(nombre);
        
        VRepository.save(videojuego);
        return videojuego;
    }
	
	public Optional<Videojuego> modificarVideojuego(String nombre, Long id) {
		VRepository.modificarVideojuego(nombre, id);
	    return VRepository.findById(id);
	}
}