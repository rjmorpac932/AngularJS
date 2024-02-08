package com.daw.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "USUARIOS")
@Data
public class Usuarios {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "NOMBRE", nullable = false)
	private String nombre;
	
	@Column(name = "USUARIO", nullable = false, unique = true)
	private String usuario;
	
	@Column(name = "EMAIL", nullable = false)
	private String email;
	
	@Column(name = "PASSWORD", nullable = false, unique = true)
	private String password;
	
	@Column(name = "FECHA_NACIMIENTO", nullable = false)
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate fechaNacimiento;
}
