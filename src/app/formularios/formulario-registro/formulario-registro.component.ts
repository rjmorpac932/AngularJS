import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: '../formulario.css'
})
export class FormularioRegistroComponent {
  formularioRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder){

    this.formularioRegistro = this.formBuilder.group({
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
    const nombreCompleto = this.formularioRegistro.get('nombreAlumno')?.value;

    if (nombreCompleto) {
      const palabras = nombreCompleto.split(' ');

      if (palabras.length >= 3) {
        const primeraLetraNombre = palabras[0].substring(0, 1).toLowerCase();
        const primerasTresLetrasPrimerApellido = palabras[1].substring(0, 3).toLowerCase();
        const primerasTresLetrasSegundoApellido = palabras[2].substring(0, 3).toLowerCase();

        const usuarioGenerado = primeraLetraNombre + primerasTresLetrasPrimerApellido + primerasTresLetrasSegundoApellido;

        // Actualizar el valor del campo 'usuario' en el formulario
        this.formularioRegistro.get('usuario')?.setValue(usuarioGenerado);
      } else {
        // Manejar el caso en el que no hay suficientes palabras
        alert('Debe insertar su nombre y apellidos');
      }
    }
  }


  enviarFormulario(){

    //si las constraseñás no coinciden...
    if (this.formularioRegistro.get('contrasena')?.value !== this.formularioRegistro.get('confirmarContrasena')?.value) {
      alert('Las contraseñas no coinciden');
    } else {
      if (this.formularioRegistro.get('usuario')?.value !== ""){
        this.tablaUsuario= `<table>
        <tr>
          <th>Nombre</th>
          <th>Usuario</th>
        </tr>
        <tr>
          <td>${this.formularioRegistro.get('nombreAlumno')?.value}</td>
          <td>${this.formularioRegistro.get('usuario')?.value}</td>
        </tr>
      </table>`;
      } else {
        alert("Debe generar el usuario");
      }
    } 

  }
}
