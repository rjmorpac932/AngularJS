package com.daw.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.dto.UsuarioDTO;
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
	
	public void eliminarUsuarios() {
		usuarioRepository.deleteAll();
	}
	
	public Usuario crearUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = new Usuario();
        
        usuario.setNombreCompleto(usuarioDTO.getNombreCompleto());;
        usuario.setAltura(usuarioDTO.getAltura());
        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setFechaNacimiento(usuarioDTO.getFechaNacimiento());
        usuario.setNombreUsuario(usuarioDTO.getNombreUsuario());
        usuario.setPassword(usuarioDTO.getPassword());
        usuario.setPeso(usuarioDTO.getPeso());
        
        usuarioRepository.save(usuario);
        return usuario;
    }
}