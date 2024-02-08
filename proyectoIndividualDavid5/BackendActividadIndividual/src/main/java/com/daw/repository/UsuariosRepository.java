package com.daw.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.daw.model.Usuarios;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuarios, Long>{

	@Query("SELECT u FROM Usuarios u "
			+ "WHERE u.usuario = :usuario "
			+ "AND u.password = :password")
	public Usuarios findUsuariosByUsuarioANDPassword(@Param("usuario") String usuario, @Param("password") String password);
	
	@Query("SELECT u FROM Usuarios u")
	public List<Usuarios> findAllUsuarios();
	
	@Query("SELECT u FROM Usuarios u "
			+ "WHERE u.email = :email")
	public Usuarios findUsuariosByEmail(@Param("email") String email);
}
