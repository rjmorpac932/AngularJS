import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-formularios-peticiones',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './formularios-peticiones.component.html',
  styleUrl: './formularios-peticiones.component.css'
})
export class FormulariosPeticionesComponent {


  formularioModificarAnimal: FormGroup;
  formularioCrearAnimal: FormGroup;

  idAnimal: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {

    this.formularioModificarAnimal = this.formBuilder.group({
      nombre: [''],
      especie: [''],
      peso: [''],
      altura: [''],
      reproduccion: ['']
    });

    this.formularioCrearAnimal = this.formBuilder.group({
      nombre: [''],
      especie: [''],
      peso: [''],
      altura: [''],
      reproduccion: ['']
    });

  }

  // Manejo de visibilidad de secciones o formularios

  isTablaBusquedaVisible = true;
  isFormularioModificarVisible = false;
  isFormularioCrearVisible = false;

  cambiarFormularioVisible(seccion: string) {

    if (seccion === "buscar") {

      this.isTablaBusquedaVisible = true;
      this.isFormularioModificarVisible = false;
      this.isFormularioCrearVisible = false;

    } else if (seccion === "modificar") {

      this.isTablaBusquedaVisible = false;
      this.isFormularioModificarVisible = true;
      this.isFormularioCrearVisible = false;

    } else if (seccion === "crear") {

      this.isTablaBusquedaVisible = false;
      this.isFormularioModificarVisible = false;
      this.isFormularioCrearVisible = true;

    }

  }

  // Crear tabla con los animales (petición get)

  busquedaAnimales() {
    const URL = `http://localhost:9999/animales`;
    const respuesta = this.http.get(URL);
    return respuesta;
  }

  crearTablaBusquedaAnimal() {
    const respuesta = this.busquedaAnimales();
    const contenedorTabla = document.getElementById('tablaAnimales');

    respuesta.subscribe(

      (datos: any) => {

        let tablaHtml = "<table class='table table-striped table-bordered'>";
        tablaHtml += "<thead><tr><th>Nombre</th><th>Especie</th><th>Peso</th>" +
          "<th>Altura</th><th>Reproducción</th><th colspan='2'>Acciones</th></tr></thead>";
        tablaHtml += "<tbody>";

        datos.forEach((animal: any) => {

          tablaHtml += `<tr>
                         <td>${animal.nombre}</td>
                         <td>${animal.especie}</td>
                         <td>${animal.peso}</td>
                         <td>${animal.altura}</td>
                         <td>${animal.reproduccion}</td>
                         <td><button class="btn-modificar btn btn-warning" 
                         data-id="${animal.id}">Modificar</button></td>
                         <td><button class="btn-eliminar btn btn-danger" 
                         data-id="${animal.id}">Eliminar</button></td>
                       </tr>`;

        });

        tablaHtml += "</tbody></table>";

        contenedorTabla!.innerHTML = tablaHtml;

        // Agregar event listener a los botones "Modificar"
        const botonesModificar = contenedorTabla?.querySelectorAll(".btn-modificar");
        const botonesEliminar = contenedorTabla?.querySelectorAll(".btn-eliminar");
        botonesModificar?.forEach(boton => {
          boton.addEventListener("click", () => {
            const idAnimal = boton.getAttribute("data-id");
            this.cambiarFormularioVisible('modificar');
            this.rellenarFormularioModificar(idAnimal);
            this.idAnimal = idAnimal;
          });
        });

        // Agregar event listener a los botones "Eliminar"
        botonesEliminar?.forEach(boton => {
          boton.addEventListener("click", () => {
            const idAnimal = boton.getAttribute("data-id");
            this.cambiarFormularioVisible("eliminar");
            this.confirmarEliminacionAnimal(idAnimal);
            this.idAnimal = idAnimal;
          });
        });
      }

    );

  }

  // Formulario con los datos del animal correspondiente, para su modificado

  busquedaAnimalById(idAnimal: any) {
    const URL = `http://localhost:9999/animales/${idAnimal}`;
    const respuesta = this.http.get(URL);
    return respuesta;
  }

  rellenarFormularioModificar(idAnimal: any) {
    const respuesta = this.busquedaAnimalById(idAnimal);
    this.cambiarFormularioVisible("modificar");

    // Rellenar formulario con los datos del animal correspondiente

    respuesta.subscribe(

      (animal: any) => {

        this.formularioModificarAnimal.get("nombre")?.setValue(animal.nombre);
        this.formularioModificarAnimal.get("especie")?.setValue(animal.especie);
        this.formularioModificarAnimal.get("peso")?.setValue(animal.peso);
        this.formularioModificarAnimal.get("altura")?.setValue(animal.altura);
        this.formularioModificarAnimal.get("reproduccion")?.setValue(animal.reproduccion);

      }
    );

  }

  modificarAnimal() {
    const idAnimal = this.idAnimal;
    const URL = `http://localhost:9999/animales/${idAnimal}`;

    const datosActualizados = {
      nombre: this.formularioModificarAnimal.get('nombre')?.value,
      especie: this.formularioModificarAnimal.get('especie')?.value,
      peso: this.formularioModificarAnimal.get('peso')?.value,
      altura: this.formularioModificarAnimal.get('altura')?.value,
      reproduccion: this.formularioModificarAnimal.get('reproduccion')?.value
    };

    const respuesta = this.http.put(URL, datosActualizados);

    respuesta.subscribe(
      (response) => {
        console.log(response);
        alert('Animal actualizado correctamente.');
        this.cambiarFormularioVisible("buscar");
      },
      (error) => {
        console.error(error);
      });

  }

  // Registro del nuevo animal

  registrarAnimal() {

    const URL = `http://localhost:9999/animales`;

    const nuevoAnimal = {
      nombre: this.formularioCrearAnimal.get("nombre")?.value,
      especie: this.formularioCrearAnimal.get("especie")?.value,
      peso: this.formularioCrearAnimal.get("peso")?.value,
      altura: this.formularioCrearAnimal.get("altura")?.value,
      reproduccion: this.formularioCrearAnimal.get("reproduccion")?.value
    }

    const respuesta = this.http.post(URL, nuevoAnimal);

    respuesta.subscribe(
      (response) => {
        console.log(response);
        alert("Animal registrado correctamente");
        this.cambiarFormularioVisible("buscar");
      },
      (error) => {
        console.error(error);
        alert("No se pudo crear el animal");
      }
    )

  }

  // Eliminado del animal correspondiente

  eliminarAnimal(idAnimal: any) {
    const URL = `http://localhost:9999/animales/${idAnimal}`;
    const respuesta = this.http.delete(URL, { responseType: 'text' });
    return respuesta;
  }

  confirmarEliminacionAnimal(idAnimal: any) {

    const confirmacion = confirm("¿Estás seguro que quieres eliminar a este animal?");

    if (confirmacion) {
      const respuesta = this.eliminarAnimal(idAnimal);
      respuesta.subscribe(
        (response) => {
          if (response == "OK") {
            alert("Animal eliminado correctamente");
          } else {
            alert("El animal no pudo eliminarse correctamente");
            console.error(response);
          }
          location.reload();
        });

    }

  }




}
