package com.daw.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.daw.model.Lenguaje;

public interface LenguajeRepository extends JpaRepository<Lenguaje, Long>{
	
	@Query(" SELECT l FROM Lenguaje l "
			+ " WHERE ( l.nombre LIKE %:nombre% ) ")
	public Lenguaje busquedaLenguaje(String nombre);
	
}