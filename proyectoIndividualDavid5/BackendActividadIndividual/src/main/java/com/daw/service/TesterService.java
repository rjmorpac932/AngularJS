package com.daw.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daw.model.Usuarios;
import com.daw.repository.UsuariosRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class TesterService {
	
	@Autowired
	private UsuariosRepository usuariosRepository;
	
	public Usuarios findUsuariosByUsuarioANDPassword(String usuario, String password) {
		Usuarios user = usuariosRepository.findUsuariosByUsuarioANDPassword(usuario, password);
		return user;
	}
	
	public Usuarios createUsuario(String nombre, String usuario, String email, String password, LocalDate fechaNacimiento) {
		Usuarios user = new Usuarios();
		user.setNombre(nombre);
		user.setUsuario(usuario);
		user.setEmail(email);
		user.setPassword(password);
		user.setFechaNacimiento(fechaNacimiento);
		usuariosRepository.save(user);
		return user;
	}
	
	public List<Usuarios> findAllUsuarios() {
		return usuariosRepository.findAllUsuarios();
	}
	
	public Usuarios modificarUsuariosPorEmail(String email, String usuario) {
		Usuarios usuarios = usuariosRepository.findUsuariosByEmail(email);
		if(usuarios != null) {
			usuarios.setUsuario(usuario);
			usuariosRepository.save(usuarios);
			return usuarios;
		}else {
			return null;
		}
	}
	
	public Usuarios eliminiarUsuariosById(Long id) {
		Optional<Usuarios> users = usuariosRepository.findById(id);
		if(users.isPresent()) {
			Usuarios u = users.get();
			usuariosRepository.delete(u);
			return u;
		}else {
			return null;
		}
	}
	
	
}
