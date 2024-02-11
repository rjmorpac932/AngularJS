import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioDTO } from '../../../dto/usuarioDTO';
import { CustomValidators } from '../custom-validators';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { response } from 'express';

@Component({
  selector: 'app-formulario-usuarios',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-usuarios.component.html',
  styleUrl: '../formulario.css'
})

export class FormularioUsuariosComponent implements OnInit {
  // FONT AWESOME ICONS

  ngOnInit(): void {
    library.add(faTrash);
    library.add(faPencil);

  }

  faTrash = faTrash;
  faPencil = faPencil;

  /*******************/

  /*
  ** DECLARACION DE FORMULARIOS **
  */

  formularioBusqueda: FormGroup;
  formularioModificarUsuario: FormGroup;
  formularioCrearUsuario: FormGroup;

  isFormularioBusquedaVisible = true;
  isFormularioModificarVisible = false;
  isFormularioCrearUsuarioVisible = false;

  cambiarFormularioVisible(formulario: string) {

    if (formulario === "buscar") {

      this.isFormularioBusquedaVisible = true;
      this.isFormularioModificarVisible = false;
      this.isFormularioCrearUsuarioVisible = false;

    } else if (formulario === "modificar") {

      this.isFormularioBusquedaVisible = false;
      this.isFormularioModificarVisible = true;
      this.isFormularioCrearUsuarioVisible = false;

    } else if (formulario === "crear") {
      this.isFormularioBusquedaVisible = false;
      this.isFormularioModificarVisible = false;
      this.isFormularioCrearUsuarioVisible = true;
    }

  }

  constructor(private formBuilder: FormBuilder) {

    this.formularioBusqueda = this.formBuilder.group({
      usuario: ['', Validators.required],
      nombreCompleto: ['', Validators.required],
    });

    this.formularioModificarUsuario = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      usuario: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.emailMatch]],
      fechaNacimiento: ['', [Validators.required, CustomValidators.dateMatch]],
      peso: ['', [Validators.min(40), Validators.max(120)]],
      altura: ['', [Validators.min(0.80), Validators.max(3)]],
      contrasena: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      confirmarContrasena: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
    }, { validators: CustomValidators.passwordMatch("contrasena", "confirmarContrasena") });

    this.formularioCrearUsuario = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      usuario: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.emailMatch]],
      fechaNacimiento: ['', [Validators.required, CustomValidators.dateMatch]],
      peso: ['', [Validators.min(40), Validators.max(120)]],
      altura: ['', [Validators.min(0.80), Validators.max(3)]],
      contrasena: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      confirmarContrasena: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
    }, { validators: CustomValidators.passwordMatch("contrasena", "confirmarContrasena") });

  }

  /*
  ** FORMULARIO BÚSQUEDA DE USUARIO - FUNCIONES**
  */

  async busquedaUsuarioGeneral() {
    const URL = `http://localhost:9999/formularios/usuarios?usuario=${this.formularioBusqueda.get("usuario")?.value}&nombreCompleto=${this.formularioBusqueda.get("nombreCompleto")?.value}`;
    const respuesta = await fetch(URL).then(respuesta => respuesta.json());
    return respuesta;
  }

  async busquedaUsuarioById(id: number | string) {
    const URL = `http://localhost:9999/formularios/usuarios/${id}`;
    const respuesta = await fetch(URL).then(respuesta => respuesta.json());
    return respuesta;
  }

  async eliminacionUsuarioEspecifico(id: number | string){
    const URL = `http://localhost:9999/formularios/usuarios/${id}`;
    const opciones = {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json',
      },
    };
    const respuesta = await fetch(URL, opciones).then(respuesta => alert("Usuario eliminado correctamente"));
    return respuesta;
  }

  async crearTablaBusquedaUsuario() {

    const datosUsuarios = await this.busquedaUsuarioGeneral() as UsuarioDTO[];
    const tablaUsuarioBody = document.querySelector("#tablaUsuarios > tbody") as HTMLElement;
    tablaUsuarioBody.innerHTML = "";

    datosUsuarios.forEach(usuario => {
      const { id, nombreCompleto, nombreUsuario, email, fechaNacimiento, peso, altura } = usuario;
      const fila = document.createElement("tr");

      fila.appendChild(document.createElement("td")).textContent = nombreUsuario;
      fila.appendChild(document.createElement("td")).textContent = nombreCompleto;
      fila.appendChild(document.createElement("td")).textContent = fechaNacimiento as string;
      fila.appendChild(document.createElement("td")).textContent = email;
      fila.appendChild(document.createElement("td")).textContent = altura as string;
      fila.appendChild(document.createElement("td")).textContent = peso as string;

      const iconoModificar = document.createElement("i");
      iconoModificar.classList.add("fa-solid", "fa-pencil");
      const columnaModificar = document.createElement("td");
      columnaModificar.appendChild(iconoModificar);
      columnaModificar.classList.add("modificarBtn");
      columnaModificar.style.color = "green";
      columnaModificar.setAttribute("data-usuario-id", id as string);
      columnaModificar.addEventListener("click", () => this.rellenarFormularioModificar(id));
      fila.appendChild(columnaModificar);

      const iconoBorrar = document.createElement("i");
      iconoBorrar.classList.add("fa-solid", "fa-trash");
      iconoBorrar.setAttribute("data-usuario-id", id as string);
      const columnaBorrado = document.createElement("td");
      columnaBorrado.classList.add("eliminarBtn");
      columnaBorrado.appendChild(iconoBorrar);
      columnaBorrado.setAttribute("data-usuario-id", id as string);
      

      columnaBorrado.addEventListener("click", () => {
        const confirmar = confirm("¿Desea seguir eliminando el usuario?");
        if(confirmar){
          fila.parentElement?.removeChild(fila);
          this.eliminacionUsuarioEspecifico(id);
        }
      });
      fila.appendChild(columnaBorrado);

      tablaUsuarioBody.appendChild(fila);
      tablaUsuarioBody.appendChild(document.createElement("br"));
    });
    dom.watch();
  }



  async rellenarFormularioModificar(idUsuario: string | number) {

    const datosUsuario = await this.busquedaUsuarioById(idUsuario) as UsuarioDTO;
    this.cambiarFormularioVisible("modificar");

    //Cambiar los values de los inputs del formulario
    const { id, nombreCompleto, nombreUsuario, email, fechaNacimiento, peso, altura, password } = datosUsuario;
    this.formularioModificarUsuario.get('usuario')?.setValue(nombreUsuario);
    this.formularioModificarUsuario.get('nombreCompleto')?.setValue(nombreCompleto);
    this.formularioModificarUsuario.get('email')?.setValue(email);
    this.formularioModificarUsuario.get('fechaNacimiento')?.setValue(fechaNacimiento);
    this.formularioModificarUsuario.get('peso')?.setValue(peso);
    this.formularioModificarUsuario.get('altura')?.setValue(altura);
    this.formularioModificarUsuario.get('contrasena')?.setValue(password);
    this.formularioModificarUsuario.get('confirmarContrasena')?.setValue(password);
    this.idUsuarioModificado = id;
  }
  idUsuarioModificado?: string | number;


  /*******************/

  /*
  ** FORMULARIO DE MODIFICADO DE USUARIO **
  */

  generarUsuario(formGroup: FormGroup): void {
    //cogemos el valor introducido en el input nombre del alumno del GroupForm
    const nombreCompleto = formGroup.get('nombreCompleto')?.value;

    if (nombreCompleto) {
      const palabras = nombreCompleto.split(' ');

      if (palabras.length >= 3) {
        const primeraLetraNombre = palabras[0].substring(0, 1).toLowerCase();
        const primerasTresLetrasPrimerApellido = palabras[1].substring(0, 3).toLowerCase();
        const primerasTresLetrasSegundoApellido = palabras[2].substring(0, 3).toLowerCase();
        const numeroAleatorio = Math.trunc(Math.random() * 1000000);
        const usuarioGenerado = primeraLetraNombre + primerasTresLetrasPrimerApellido + primerasTresLetrasSegundoApellido + numeroAleatorio;

        // Actualizar el valor del campo 'usuario' en el formulario
        formGroup.get('usuario')?.setValue(usuarioGenerado);
      } else {
        // Manejar el caso en el que no hay suficientes palabras
        alert('Debe insertar su nombre y apellidos');
      }
    } else {
      alert('Debe insertar su nombre y apellidos');
    }
  }

  async actualizarUsuario(id: String | number) {
    const URL = `http://localhost:9999/formularios/actualizarUsuario/${id}`;
    const usuarioModificado = {
      nombreCompleto: this.formularioModificarUsuario.get('nombreCompleto')?.value,
      nombreUsuario: this.formularioModificarUsuario.get('usuario')?.value,
      email: this.formularioModificarUsuario.get('email')?.value,
      password: this.formularioModificarUsuario.get('contrasena')?.value,
      fechaNacimiento: this.formularioModificarUsuario.get('fechaNacimiento')?.value,
      peso: this.formularioModificarUsuario.get('peso')?.value,
      altura: this.formularioModificarUsuario.get('altura')?.value
    }
    const configuracion = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Acces-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(usuarioModificado)
    }
    const respuesta = await fetch(URL, configuracion).then(respuesta => respuesta.json());
    return respuesta;
  }

  async modificarUsuario() {

    const emailPatron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const datePatron = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

    if (this.formularioModificarUsuario.get('contrasena')?.value !== this.formularioModificarUsuario.get('confirmarContrasena')?.value) {
      alert('Las contraseñas no coinciden');
    } else {
      if (this.formularioModificarUsuario.get('usuario')?.value !== "") {
        if (emailPatron.test(this.formularioModificarUsuario.get("email")?.value)) {
          if (datePatron.test(this.formularioModificarUsuario.get("fechaNacimiento")?.value)) {
            if (this.idUsuarioModificado) {
              await this.actualizarUsuario(this.idUsuarioModificado);
              alert("Usuario modificado con éxito.")
              window.location.href = 'http://localhost:4200/formularios';
            } else {
              alert("ID no encontrado");
            }
          } else {
            alert("Debe introducir una fecha válida");
          }
        } else {
          alert("Debe introducir un correo válido");
        }

      } else {
        alert("Debe generar el usuario");
      }
    }

  }

  // FUNCIÓN ELIMINAR TODO (JºMaría)

  async eliminarTodosLosUsuarios() {
    const confirmacion = window.confirm("¿Seguro que deseas eliminar todos los usuarios?");
    if(confirmacion) {
      const URL = `http://localhost:9999/formularios/usuarios`;
      const configuracion = {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      }
      const respuesta = await fetch(URL, configuracion);
      
      if(respuesta.ok) {
        return alert("Usuarios eliminados correctamente");
      }
      
    } else {
      return null;
    }
  }
  // CREAR USUARIO 

  crearUsuario() {

    const emailPatron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const datePatron = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const url = 'http://localhost:9999/formularios/usuarios';
    // Creamos propiedad con los valores de los datos del usuario introducidos en el formulario
    const datosUsuario = {
      nombreCompleto: this.formularioCrearUsuario.get('nombreCompleto')?.value,
      nombreUsuario: this.formularioCrearUsuario.get('usuario')?.value,
      email: this.formularioCrearUsuario.get('email')?.value,
      password: this.formularioCrearUsuario.get('contrasena')?.value,
      fechaNacimiento: this.formularioCrearUsuario.get('fechaNacimiento')?.value,
      peso: this.formularioCrearUsuario.get('peso')?.value,
      altura: this.formularioCrearUsuario.get('altura')?.value
    };

    console.log(datosUsuario);
    if (this.formularioCrearUsuario.get('contrasena')?.value !== this.formularioCrearUsuario.get('confirmarContrasena')?.value) {
      alert('Las contraseñas no coinciden');
    } else {
      if (this.formularioCrearUsuario.get('usuario')?.value !== "") {
        if ((emailPatron.test(this.formularioCrearUsuario.get("email")?.value) && this.formularioCrearUsuario.get("email")?.value != "")) {
          if (datePatron.test(this.formularioCrearUsuario.get("fechaNacimiento")?.value)) {

            // FUNCIÓN DE LA SOLICITUD POST

            fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(datosUsuario)
            }).then(response => {
              if (!response.ok) {
                alert('Error al crear el usuario');
                throw new Error('Error al crear usuario');
              }
              alert('Usuario creado exitosamente');
            });


          } else {
            alert("Debe introducir una fecha válida");
          }
        } else {
          alert("Debe introducir un correo válido");
        }

      } else {
        alert("Debe generar el usuario");
      }
    }

  }

}