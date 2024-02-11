package com.daw.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.PostMapping;
=======
import org.springframework.web.bind.annotation.PutMapping;
>>>>>>> c1bf42f8e27d7e9e3dd6e8ee69d49566ed143a18
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daw.dto.UsuarioDTO;
import com.daw.model.Usuario;
import com.daw.service.Servicio;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/formularios")
public class ApplicationController {

	@Autowired
	private Servicio servicio;

	@GetMapping("/usuarios")
<<<<<<< HEAD
	public ResponseEntity<List<Usuario>> busquedaUsuarioGeneral() {
		return ResponseEntity.ok().body(servicio.busquedaUsuarioGeneral());
=======
	public ResponseEntity<List<Usuario>> busquedaUsuarioGeneral(
			@RequestParam(name = "usuario", required = false) String usuario,
			@RequestParam(name = "nombreCompleto", required = false) String nombreCompleto) {
		return ResponseEntity.ok().body(servicio.busquedaUsuarioGeneral(usuario, nombreCompleto));
>>>>>>> c1bf42f8e27d7e9e3dd6e8ee69d49566ed143a18
	}

	@GetMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> busquedaUsuarioById(@PathVariable("id") Long id) {
		return ResponseEntity.ok().body(servicio.busquedaUsuarioById(id));
	}
<<<<<<< HEAD
	
	@DeleteMapping("/usuarios")
	public void eliminarUsuarios(){
		servicio.eliminarUsuarios();
	}
	
	@PostMapping("/usuarios")
	public ResponseEntity<Usuario> crearUsuario(@RequestBody UsuarioDTO usuarioDTO){
		return ResponseEntity.ok().body(servicio.crearUsuario(usuarioDTO));
	}
	
	@DeleteMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> eliminacionUsuarioEspecifico(@PathVariable("id") Long idUsuario){
		return ResponseEntity.ok().body(servicio.eliminacionUsuarioEspecifico(idUsuario));
	}

	@PostMapping("/usuarios")
	public Usuario crearUsuario(@RequestBody Usuario usuario)  {
		//return ResponseEntity.ok().body(servicio.crearUsuario(usuarioDTO));
		return servicio.crearUsuario(usuario);
	}

=======

	@PutMapping("/actualizarUsuario/{id}")
	public ResponseEntity<Usuario> modificarUsuario(@PathVariable("id") Long id, @RequestBody Usuario usuarioActualizado){
		return ResponseEntity.ok().body(servicio.modificarUsuario(id, usuarioActualizado));
	}
>>>>>>> c1bf42f8e27d7e9e3dd6e8ee69d49566ed143a18
}