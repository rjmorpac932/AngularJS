import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LenguajeDTO } from '../dto/lenguajeDTO';
import { CustomValidators } from './customValidators';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormularioLenguajes';

  formularioBusquedaLenguajes: FormGroup;
  formularioModificarLenguaje: FormGroup;
  botonEditar: any;

  constructor(private formBuilder: FormBuilder) {
    this.formularioBusquedaLenguajes = this.formBuilder.group({
      nombre: ['', Validators.required]
    });

    this.formularioModificarLenguaje = this.formBuilder.group({
      descripcion: ['', Validators.required],
      fechaLanzamiento: ['', [Validators.required, CustomValidators.dateMatch]],
      nombre: ['', Validators.required],
      tipoLenguaje: ['', Validators.required],
      ultimaVersion: ['', Validators.required],
    });
  }

  async mostrarLenguajeBuscado() {
    const nombreLenguaje = this.formularioBusquedaLenguajes.get("nombre")?.value;
    if (!nombreLenguaje) {
      alert('Por favor, ingrese el nombre de un lenguaje.');
      return;
    }
    const URL = `http://localhost:9999/formularios/lenguajes?nombre=${this.formularioBusquedaLenguajes.get("nombre")?.value}`;
    const respuesta = await fetch(URL).then(respuesta => respuesta.json());
    return respuesta;
  }

  async crearTablaBusquedaLenguajes() {

    const lenguaje = await this.mostrarLenguajeBuscado() as LenguajeDTO;
    const tablaLenguajesHead = document.querySelector("#tablaLenguaje > thead") as HTMLElement;
    const tablaLenguajesBody = document.querySelector("#tablaLenguaje > tbody") as HTMLElement;

    tablaLenguajesHead.innerHTML = "";
    const fila = document.createElement("tr");
    fila.appendChild(document.createElement("th")).textContent = "INFORMACIÓN DEL LENGUAJE:";
    tablaLenguajesHead.appendChild(fila);
    tablaLenguajesBody.innerHTML = "";

    const { id, nombre, ultimaVersion, fechaLanzamiento, tipoLenguaje, descripcion } = lenguaje;
    const fila1 = document.createElement("tr");
    fila1.appendChild(document.createElement("td")).insertAdjacentHTML('beforeend', "<strong>NOMBRE:</strong>");
    const fila2 = document.createElement("tr");
    fila2.appendChild(document.createElement("td")).textContent = nombre;
    const fila3 = document.createElement("tr");
    fila3.appendChild(document.createElement("td")).insertAdjacentHTML('beforeend', "<strong>ÚLTIMA VERSIÓN:</strong>");
    const fila4 = document.createElement("tr");
    fila4.appendChild(document.createElement("td")).textContent = ultimaVersion as string;
    const fila5 = document.createElement("tr");
    fila5.appendChild(document.createElement("td")).insertAdjacentHTML('beforeend', "<strong>FECHA LANZAMIENTO:</strong>");
    const fila6 = document.createElement("tr");
    fila6.appendChild(document.createElement("td")).textContent = fechaLanzamiento as string;
    const fila7 = document.createElement("tr");
    fila7.appendChild(document.createElement("td")).insertAdjacentHTML('beforeend', "<strong>TIPO:</strong>");
    const fila8 = document.createElement("tr");
    fila8.appendChild(document.createElement("td")).textContent = tipoLenguaje;
    const fila9 = document.createElement("tr");
    fila9.appendChild(document.createElement("td")).insertAdjacentHTML('beforeend', "<strong>DESCRIPCIÓN:</strong>");
    const fila10 = document.createElement("tr");
    fila10.appendChild(document.createElement("td")).textContent = descripcion;

    tablaLenguajesBody.appendChild(fila1);
    tablaLenguajesBody.appendChild(fila2);
    tablaLenguajesBody.appendChild(fila3);
    tablaLenguajesBody.appendChild(fila4);
    tablaLenguajesBody.appendChild(fila5);
    tablaLenguajesBody.appendChild(fila6);
    tablaLenguajesBody.appendChild(fila7);
    tablaLenguajesBody.appendChild(fila8);
    tablaLenguajesBody.appendChild(fila9);
    tablaLenguajesBody.appendChild(fila10);

    this.crearBotonEditar();
  }

  async crearBotonEditar() {
    const tabla = document.querySelector("#tablaLenguaje") as HTMLElement;
    const botonExistente = document.getElementById('botonEditar');
    if (botonExistente) {
      botonExistente.remove();
    }

    const botonEditar = document.createElement('button');
    botonEditar.id = 'botonEditar';
    botonEditar.className = 'btn btn-success';
    botonEditar.style.float = 'right';
    botonEditar.style.margin = '0 50px 25px 0';
    botonEditar.textContent = 'Editar';

    botonEditar.addEventListener('click', () => {
      this.mostrarFormularioLenguaje = true;
      this.rellenarFormularioModificar();
    });

    tabla.parentNode?.insertBefore(botonEditar, tabla.nextSibling);
  }

  async borrarDatos() {
    const tablaLenguajesHead = document.querySelector("#tablaLenguaje > thead") as HTMLElement;
    const tablaLenguajesBody = document.querySelector("#tablaLenguaje > tbody") as HTMLElement;

    tablaLenguajesHead.innerHTML = "";
    tablaLenguajesBody.innerHTML = "";

    this.mostrarFormularioLenguaje = false;

    const botonExistente = document.getElementById('botonEditar');
    if (botonExistente) {
      botonExistente.remove();
    }

  }

  async editarLenguaje(id?: string | number) {
    const URL = `http://localhost:9999/formularios/actualizarLenguaje/${id}`;
    const lenguajeModificado = {
      nombre: this.formularioModificarLenguaje.get('nombre')?.value,
      ultimaVersion: this.formularioModificarLenguaje.get('ultimaVersion')?.value,
      fechaLanzamiento: this.formularioModificarLenguaje.get('fechaLanzamiento')?.value,
      tipoLenguaje: this.formularioModificarLenguaje.get('tipoLenguaje')?.value,
      descripcion: this.formularioModificarLenguaje.get('descripcion')?.value
    }
    const configuracion = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Acces-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(lenguajeModificado)
    }
    body: JSON.stringify(lenguajeModificado)
    const respuesta = await fetch(URL, configuracion).then(respuesta => respuesta.json());
    return respuesta;
  }

  public mostrarFormularioLenguaje: boolean = false;

  async rellenarFormularioModificar() {

    const datosUsuario = await this.mostrarLenguajeBuscado() as LenguajeDTO;

    const { id, nombre, ultimaVersion, fechaLanzamiento, tipoLenguaje, descripcion } = datosUsuario;
    this.formularioModificarLenguaje.get('nombre')?.setValue(nombre);
    this.formularioModificarLenguaje.get('ultimaVersion')?.setValue(ultimaVersion);
    this.formularioModificarLenguaje.get('fechaLanzamiento')?.setValue(fechaLanzamiento);
    this.formularioModificarLenguaje.get('tipoLenguaje')?.setValue(tipoLenguaje);
    this.formularioModificarLenguaje.get('descripcion')?.setValue(descripcion);
    this.idLenguajeModificado = id;
    this.crearBotonEnviarCambios();
  }
  idLenguajeModificado?: string | number;

  async crearBotonEnviarCambios() {
    const formulario = document.querySelector("#formularioEdicion") as HTMLElement;
    const botonExistente = document.getElementById('botonEditar');
    if (botonExistente) {
      botonExistente.remove();
    }

    const botonEditar = document.createElement('button');
    botonEditar.id = 'botonEditar';
    botonEditar.className = 'btn btn-success';
    botonEditar.style.float = 'right';
    botonEditar.style.margin = '0 50px 25px 0';
    botonEditar.textContent = 'Enviar';

    botonEditar.addEventListener('click', async () => {
      await this.modificarUsuario();
    });

    formulario.parentNode?.insertBefore(botonEditar, formulario.nextSibling);
  }

  async modificarUsuario() {
    if (this.idLenguajeModificado) {
      await this.editarLenguaje(this.idLenguajeModificado);
      alert("Lenguaje modificado con éxito.");
    } else {
      alert("ID no encontrado");
    }
  }
}
