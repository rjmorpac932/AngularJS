import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-videojuegos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './videojuegos.component.html',
  styleUrl: './videojuegos.component.css'
})
export class VideojuegosComponent {

  formV: FormGroup;
  // formV2: FormGroup;
  // formV3: FormGroup;
  listaVideojuegos: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.formV = this.formBuilder.group({
      nombre: ['', Validators.required],
      id: ['', Validators.required]
    });
    // this.formV2 = this.formBuilder.group({
    //   id: ['', Validators.required]
    // });
    // this.formV3 = this.formBuilder.group({
    //   nombre: ['', Validators.required],
    //   id: ['', Validators.required]
    // });
  }

  ngOnInit() {
    this.buscarTodosLosVideojuegos();
  }

  async buscarTodosLosVideojuegos() {
    const URL = `http://localhost:9999/formularios/videojuegos`;
    const respuesta = await fetch(URL).then(respuesta => respuesta.json());
    this.listaVideojuegos = respuesta;
  }

  async crearVideojuego() {
    const nombre = this.formV.get("nombre")?.value;
    const URL = `http://localhost:9999/formularios/videojuegos/${nombre}`;
    const configuracion = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ nombre })
    }
    const respuesta = await fetch(URL, configuracion).then(respuesta => respuesta.json());
    this.buscarTodosLosVideojuegos();
    return respuesta;
  }

  async busquedaVideojuegoById() {
    const id = this.formV.get("id")?.value;
    const URL = `http://localhost:9999/formularios/videojuegos/${id}`;
    const configuracion = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    try {
      const respuesta = await fetch(URL, configuracion);
      if (!respuesta.ok) {
          throw new Error(`Error en la solicitud: ${respuesta.status}`);
      }

      const videojuego = await respuesta.json();
      alert(`Nombre del videojuego: ${videojuego.nombre}`);
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }

  async eliminarVideojuego() {
    const URL = `http://localhost:9999/formularios/videojuegos/${this.formV.get("id")?.value}`;
    const configuracion = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    }
    const respuesta = await fetch(URL, configuracion);
    this.buscarTodosLosVideojuegos();
    if(respuesta.ok) {
      return alert("Videojuego eliminado correctamente");
    }
    return respuesta;
  }

  async modificarVideojuego() {
    const nombre = this.formV.get("nombre")?.value;
    const id = this.formV.get("id")?.value;
    const URL = `http://localhost:9999/formularios/videojuegos/${id}/${nombre}`;
    const configuracion = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ nombre })
    }
    const respuesta = await fetch(URL, configuracion).then(respuesta => respuesta.json());
    this.buscarTodosLosVideojuegos();
    return respuesta;
  }

}
