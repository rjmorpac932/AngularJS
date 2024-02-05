import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from '../../custom-validators';
@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: '../../formulario.css'
})
export class FormularioRegistroComponent {

  formularioRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formularioRegistro = this.formBuilder.group({
      nombreUsuario: ['', Validators.required],
      usuario: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.emailMatch]],
      contrasena: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirmarContrasena: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
    }, {validators: CustomValidators.passwordMatch("contrasena", "confirmarContrasena")});

  }

  usuarioGenerado = '';
  tablaUsuario = '';

  generarUsuario(): void {
    //cogemos el valor introducido en el input nombre del alumno del GroupForm
    const nombreCompleto = this.formularioRegistro.get('nombreUsuario')?.value;

    if (nombreCompleto) {
      const palabras = nombreCompleto.split(' ');

      if (palabras.length >= 3) {
        const primeraLetraNombre = palabras[0].substring(0, 1).toLowerCase();
        const primerasTresLetrasPrimerApellido = palabras[1].substring(0, 3).toLowerCase();
        const primerasTresLetrasSegundoApellido = palabras[2].substring(0, 3).toLowerCase();
        const numeroAleatorio = Math.trunc(Math.random() * 1000000);
        const usuarioGenerado = primeraLetraNombre + primerasTresLetrasPrimerApellido + primerasTresLetrasSegundoApellido + numeroAleatorio;

        // Actualizar el valor del campo 'usuario' en el formulario
        this.formularioRegistro.get('usuario')?.setValue(usuarioGenerado);
      } else {
        // Manejar el caso en el que no hay suficientes palabras
        alert('Debe insertar su nombre y apellidos');
      }
    } else {
      alert('Debe insertar su nombre y apellidos');
    }
  }


  enviarFormulario() {
    
    const emailPatron =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    //si las constraseñás no coinciden...
    if (this.formularioRegistro.get('contrasena')?.value !== this.formularioRegistro.get('confirmarContrasena')?.value) {
      alert('Las contraseñas no coinciden');
    } else {
      if (this.formularioRegistro.get('usuario')?.value !== "") {
        if(emailPatron.test(this.formularioRegistro.get("email")?.value)){
          this.tablaUsuario = `<table>
          <tr>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>${this.formularioRegistro.get('nombreUsuario')?.value}</td>
            <td>${this.formularioRegistro.get('usuario')?.value}</td>
            <td>${this.formularioRegistro.get("email")?.value}</td>
          </tr>
        </table>`;
        }else{
          alert("Debe introducir un correo válido");
        }
        
      } else {
        alert("Debe generar el usuario");
      }
    }

  }
  
}