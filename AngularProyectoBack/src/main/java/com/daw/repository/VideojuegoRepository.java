package com.daw.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.daw.model.Videojuego;

import jakarta.transaction.Transactional;

@Transactional
public interface VideojuegoRepository extends JpaRepository<Videojuego, Long>{
	
	public Optional<Videojuego> findById(Long id);
	
	public void deleteById(Long id);
	
	@Modifying
	@Query("UPDATE Videojuego v SET v.nombre = :Nnombre WHERE v.id = :id")
	public int modificarVideojuego(String Nnombre, Long id);
}