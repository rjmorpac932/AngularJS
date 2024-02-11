package com.daw.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.model.Partida;
import com.daw.model.Usuario;
import com.daw.repository.PartidaRepository;
import com.daw.repository.UsuarioRepository;

import lombok.Data;

@Service
@Data
public class Servicio {
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@Autowired
	PartidaRepository partidaRepository;
	
	public List<Usuario> busquedaUsuarioGeneral(String nombreUsuario, String nombreCompleto){
		return usuarioRepository.busquedaUsuarioGeneral(nombreUsuario, nombreCompleto);
	}
	
	public Usuario busquedaUsuarioById(Long id) {
		return usuarioRepository.getReferenceById(id);
	}
	
	public Usuario crearUsuario(Usuario nuevoUsuario) {
		return usuarioRepository.save(nuevoUsuario);
	}
	
	public Usuario findUsuarioByNombreUsuarioAndPassword(String nombreCompleto, String password) {
		return usuarioRepository.findByNombreUsuarioAndPassword(nombreCompleto, password);
	}
	
	public Usuario findUsuarioById(Long id) {
		return usuarioRepository.getReferenceById(id);
	}
	
	public Partida crearPartida(Usuario usuario1, Usuario usuario2) {
		
		Partida nuevaPartida = new Partida();
		nuevaPartida.setUsuario1(usuario1);
		nuevaPartida.setUsuario2(usuario2);
		nuevaPartida.setContador1(0);
		nuevaPartida.setContador2(0);
		
		try {
			
		return partidaRepository.save(nuevaPartida);
		
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}
	
	public Partida guardarPartida(Usuario usuario1, Usuario usuario2, Integer contador1, Integer contador2) {
		
		Partida partida = this.findPartidaByUser1AndUser2(usuario1.getNombreUsuario(), 
				usuario1.getPassword(), 
				usuario2.getNombreUsuario(), 
				usuario2.getPassword());
		
		partida.setContador1(contador1);
		partida.setContador2(contador2);
		
		try {
			
		return partidaRepository.save(partida);
		
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}
	
	public Partida findPartidaByUser1AndUser2(String nombreUsuario1, String password_usuario_1, String nombreUsuario2,String password_usuario_2) {
		
		if(partidaRepository.busquedaPartida(nombreUsuario1, password_usuario_1, nombreUsuario2,password_usuario_2).isPresent()) {
			
			return partidaRepository.busquedaPartida(nombreUsuario1, password_usuario_1, nombreUsuario2,password_usuario_2).get();
			
		} else {
			
			if(partidaRepository.busquedaPartida(nombreUsuario2,password_usuario_2,nombreUsuario1, password_usuario_1).isPresent()) {
				return partidaRepository.busquedaPartida(nombreUsuario2,password_usuario_2,nombreUsuario1, password_usuario_1).get();
			
			} else {
				Usuario usuario1 = usuarioRepository.findByNombreUsuarioAndPassword(nombreUsuario1, password_usuario_1);
				Usuario usuario2 =  usuarioRepository.findByNombreUsuarioAndPassword(nombreUsuario2, password_usuario_2);
				return this.crearPartida(usuario1, usuario2);
			}
			
		}
		
	}
	
}