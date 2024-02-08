package com.daw.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class UsuarioDTO {
	
	private String nombreCompleto;
	
	private String nombreUsuario;
	
	private String email;
	
	private String password;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	private LocalDate fechaNacimiento;
	
	private Double peso;
	
	private Double altura;
	
}