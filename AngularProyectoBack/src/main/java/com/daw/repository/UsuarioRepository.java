package com.daw.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.daw.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	
	
}