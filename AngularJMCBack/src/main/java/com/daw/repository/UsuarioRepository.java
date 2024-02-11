package com.daw.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.daw.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	
	@Query(" SELECT u FROM Usuario u "
			+ " WHERE ( u.nombreUsuario LIKE %:usuario% ) "
			+ " AND ( u.nombreCompleto LIKE %:nombreCompleto% ) ")
	public List<Usuario> busquedaUsuarioGeneral(String usuario, String nombreCompleto);
	
	public Usuario findByNombreUsuarioAndPassword(String nombreUsuario, String password);
	
}