package com.daw.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.model.Usuario;
import com.daw.repository.UsuarioRepository;

import lombok.Data;

@Service
@Data
public class Servicio {

	@Autowired
	UsuarioRepository usuarioRepository;

	public List<Usuario> busquedaUsuarioGeneral(){
		return usuarioRepository.findAll();
	}
	
	public Usuario busquedaUsuarioById(Long id) {
		return usuarioRepository.getReferenceById(id);
	}

	public Usuario crearUsuario(Usuario usuario) {
		usuarioRepository.save(usuario);
		return usuario;

	}

}