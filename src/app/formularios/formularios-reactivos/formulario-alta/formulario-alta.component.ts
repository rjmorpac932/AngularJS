import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-alta',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-alta.component.html',
  styleUrl: '../../formulario.css'
})

export class FormularioAltaComponent {

  formularioAlta: FormGroup;

  constructor(private formBuilder: FormBuilder){

    this.formularioAlta = this.formBuilder.group({
      nombreAlumno: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirmarContrasena: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
    });

  }

  usuarioGenerado = '';
  tablaUsuario = '';

  generarUsuario(): void {
    //cogemos el valor introducido en el input nombre del alumno del GroupForm
    const nombreCompleto = this.formularioAlta.get('nombreAlumno')?.value;

    if (nombreCompleto) {
      const palabras = nombreCompleto.split(' ');

      if (palabras.length >= 3) {
        const primeraLetraNombre = palabras[0].substring(0, 1).toLowerCase();
        const primerasTresLetrasPrimerApellido = palabras[1].substring(0, 3).toLowerCase();
        const primerasTresLetrasSegundoApellido = palabras[2].substring(0, 3).toLowerCase();

        const usuarioGenerado = primeraLetraNombre + primerasTresLetrasPrimerApellido + primerasTresLetrasSegundoApellido;

        // Actualizar el valor del campo 'usuario' en el formulario
        this.formularioAlta.get('usuario')?.setValue(usuarioGenerado);
      } else {
        // Manejar el caso en el que no hay suficientes palabras
        alert('Debe insertar su nombre y apellidos');
      }
    }else{
      alert('Debe insertar su nombre y apellidos');
    }
  }


  enviarFormulario(){

    //si las constraseñás no coinciden...
    if (this.formularioAlta.get('contrasena')?.value !== this.formularioAlta.get('confirmarContrasena')?.value) {
      alert('Las contraseñas no coinciden');
    } else {
      if (this.formularioAlta.get('usuario')?.value !== ""){
        this.tablaUsuario= `<table>
        <tr>
          <th>Nombre</th>
          <th>Usuario</th>
        </tr>
        <tr>
          <td>${this.formularioAlta.get('nombreAlumno')?.value}</td>
          <td>${this.formularioAlta.get('usuario')?.value}</td>
        </tr>
      </table>`;
      } else {
        alert("Debe generar el usuario");
      }
    } 

  }

}