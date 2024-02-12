package com.daw.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
public class Lenguaje {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "NOMBRE", length = 25, nullable = false, unique = true)
	private String nombre;
	
	@Column(name = "ULTIMA_VERSION", length = 14, nullable = false)
	@Size(min = 6, max = 14)
	private String ultimaVersion;
	
	@Column(name = "FECHA_LANZAMIENTO", nullable = true)
	@Past
	private LocalDate fechaLanzamiento;
	
	@Column(name = "TIPO_LENGUAJE", length = 15, nullable = false)
	@Size(min = 6, max = 12)
	private String tipoLenguaje;
	
	@Column(name = "DESCRIPCION", length = 500, nullable = false, unique = true)
	@Email
	private String descripcion;
	
}