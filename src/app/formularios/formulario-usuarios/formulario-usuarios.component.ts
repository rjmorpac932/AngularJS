import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioDTO } from '../../../dto/usuarioDTO';
import { CustomValidators } from '../custom-validators';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { library, dom } from '@fortawesome/fontawesome-svg-core';

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

  isFormularioBusquedaVisible = true;
  isFormularioModificarVisible = false;

  cambiarFormularioVisible() {

    if (this.isFormularioBusquedaVisible) {

      this.isFormularioBusquedaVisible = false;
      this.isFormularioModificarVisible = true;

    } else {

      this.isFormularioBusquedaVisible = true;
      this.isFormularioModificarVisible = false;

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
      fila.appendChild(columnaBorrado);

      tablaUsuarioBody.appendChild(fila);
      tablaUsuarioBody.appendChild(document.createElement("br"));
    });
    dom.watch();
  }

  async rellenarFormularioModificar(idUsuario: string | number) {

    const datosUsuario = await this.busquedaUsuarioById(idUsuario) as UsuarioDTO;
    this.cambiarFormularioVisible();

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
  }

  /*******************/

  /*
  ** FORMULARIO DE MODIFICADO DE USUARIO **
  */

  generarUsuario(): void {
    //cogemos el valor introducido en el input nombre del alumno del GroupForm
    const nombreCompleto = this.formularioModificarUsuario.get('nombreCompleto')?.value;

    if (nombreCompleto) {
      const palabras = nombreCompleto.split(' ');

      if (palabras.length >= 3) {
        const primeraLetraNombre = palabras[0].substring(0, 1).toLowerCase();
        const primerasTresLetrasPrimerApellido = palabras[1].substring(0, 3).toLowerCase();
        const primerasTresLetrasSegundoApellido = palabras[2].substring(0, 3).toLowerCase();
        const numeroAleatorio = Math.trunc(Math.random() * 1000000);
        const usuarioGenerado = primeraLetraNombre + primerasTresLetrasPrimerApellido + primerasTresLetrasSegundoApellido + numeroAleatorio;

        // Actualizar el valor del campo 'usuario' en el formulario
        this.formularioModificarUsuario.get('usuario')?.setValue(usuarioGenerado);
      } else {
        // Manejar el caso en el que no hay suficientes palabras
        alert('Debe insertar su nombre y apellidos');
      }
    } else {
      alert('Debe insertar su nombre y apellidos');
    }
  }

  modificarUsuario() {

    const emailPatron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const datePatron = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

    if (this.formularioModificarUsuario.get('contrasena')?.value !== this.formularioModificarUsuario.get('confirmarContrasena')?.value) {
      alert('Las contraseñas no coinciden');
    } else {
      if (this.formularioModificarUsuario.get('usuario')?.value !== "") {
        if (emailPatron.test(this.formularioModificarUsuario.get("email")?.value)) {
          if (datePatron.test(this.formularioModificarUsuario.get("fechaNacimiento")?.value)) {
            //AQUI SE PONE LA FUNCIÓN (YA QUE HA PASADO TODAS LAS VALIDACIONES)
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
}