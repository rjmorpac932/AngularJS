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

	public Usuario modificarUsuario(Long id, Usuario usuarioActualizado) {
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        if(usuario.isPresent()) {
        	Usuario usuarioModificado = usuario.get();
        	usuarioModificado.setNombreCompleto(usuarioActualizado.getNombreCompleto());
        	usuarioModificado.setNombreUsuario(usuarioActualizado.getNombreUsuario());
        	usuarioModificado.setEmail(usuarioActualizado.getEmail());
        	usuarioModificado.setPassword(usuarioActualizado.getPassword());
        	usuarioModificado.setFechaNacimiento(usuarioActualizado.getFechaNacimiento());
        	usuarioModificado.setPeso(usuarioActualizado.getPeso());
        	usuarioModificado.setAltura(usuarioActualizado.getAltura());
        	usuarioRepository.save(usuarioModificado);
        	return usuarioModificado;
        } else {
        	return null;
        }
        
        
        
        
    }
	
}