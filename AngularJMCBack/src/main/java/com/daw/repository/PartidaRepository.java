package com.daw.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.daw.model.Partida;

public interface PartidaRepository extends JpaRepository<Partida, Long>{
	
	@Query(" SELECT p FROM Partida p "
			+ " WHERE p.usuario1.nombreUsuario = :nombreUsuario1 "
			+ " AND p.usuario1.password = :password_usuario_1 "
			+ " AND p.usuario2.nombreUsuario = :nombreUsuario2 "
			+ " AND p.usuario2.password = :password_usuario_2 ")
	public Optional<Partida> busquedaPartida(String nombreUsuario1, String password_usuario_1, String nombreUsuario2, String password_usuario_2);
		
}