package com.daw.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;

	@Column(name = "NOMBRE_COMPLETO", length = 50, nullable = false)
	private String nombreCompleto;

	@Column(name = "NOMBRE_USUARIO", length = 14, nullable = false, unique = true)
	@Size(min = 6, max = 14)
	private String nombreUsuario;

	@Column(name = "EMAIL", length = 320, unique = true, nullable = false)
	@Email
	private String email;

	@Column(name = "PASSWORD", length = 12, nullable = false)
	@Size(min = 6, max = 12)
	private String password;

	@Column(name = "FECHA_NACIMIENTO", nullable = true)
	@Past
	private LocalDate fechaNacimiento;

	@Column(name = "PESO", nullable = true)
	@DecimalMax("120.00")
	@DecimalMin("40")
	private Double peso;

	@Column(name = "ALTURA", nullable = true)
	@DecimalMin("0.80")
	@DecimalMax("3.00")
	private Double altura;

}