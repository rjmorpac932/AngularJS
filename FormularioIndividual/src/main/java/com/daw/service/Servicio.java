package com.daw.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.model.Lenguaje;
import com.daw.repository.LenguajeRepository;

import lombok.Data;

@Service
@Data
public class Servicio {
	
	@Autowired
	LenguajeRepository lenguajeRepository;
	
	public Lenguaje busquedaLenguaje(String nombre){
		return lenguajeRepository.busquedaLenguaje(nombre);
	}

	/*
	 * public Lenguaje modificarLenguaje(Long id, Lenguaje lenguajeActualizado) {
	 * Optional<Lenguaje> lenguaje = lenguajeRepository.findById(id);
	 * if(lenguaje.isPresent()) { Lenguaje lenguajeModificado = lenguaje.get();
	 * lenguajeModificado.setNombre(lenguajeActualizado.getNombre());
	 * lenguajeModificado.setUltimaVersion(lenguajeActualizado.getUltimaVersion());
	 * lenguajeModificado.setFechaLanzamiento
	 * (lenguajeActualizado.getFechaLanzamiento());
	 * lenguajeModificado.setTipoLenguaje(lenguajeActualizado.getTipoLenguaje());
	 * lenguajeModificado.setDescripcion(lenguajeActualizado.getDescripcion());
	 * lenguajeRepository.save(lenguajeModificado); return lenguajeModificado; }
	 * else { return null; }
	 * 
	 * }
	 */
	
}