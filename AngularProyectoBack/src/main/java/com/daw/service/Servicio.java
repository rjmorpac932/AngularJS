package com.daw.service;

import java.util.List;
import java.util.Optional;

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
	
	public List<Usuario> busquedaUsuarioGeneral(String nombreUsuario, String nombreCompleto){
		return usuarioRepository.busquedaUsuarioGeneral(nombreUsuario, nombreCompleto);
	}
	
	public Usuario busquedaUsuarioById(Long id) {
		return usuarioRepository.getReferenceById(id);
	}
	
	public Usuario eliminacionUsuarioEspecifico(Long idUsuario) {
		Optional<Usuario> usuario = usuarioRepository.findById(idUsuario);
		if(usuario.isPresent()) {
			Usuario u = usuario.get();
			usuarioRepository.delete(u);
			return null;
		}else {
			return null;
		}
		
	}
	
}