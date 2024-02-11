package com.daw.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="animal")

public class Animal {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
    @Column(name = "ID")
	private Long id;
	
	@Column(name = "ESPECIE")
	private String especie;

	@Column(name = "NOMBRE")
	private String nombre;

	@Column(name = "PESO")
	private Double peso;
	
	@Column(name = "ALTURA")
	private Double altura;
	
	@Column(name = "REPRODUCCION")
	private String reproduccion;

}
