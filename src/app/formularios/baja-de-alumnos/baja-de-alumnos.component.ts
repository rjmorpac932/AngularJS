import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-baja',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './baja-de-alumnos.component.html',
  styleUrl: '../formulario.css'
})
export class FormularioBajaComponent {

  bajaAlumnoForm: FormGroup;
  usuarios = ['usuario1', 'usuario2', 'usuario3'];

  constructor(private fb: FormBuilder) {
    this.bajaAlumnoForm = this.fb.group({
      usuario: ['', Validators.required],
    });
  }
  
  darBaja() {
    const usuario = this.bajaAlumnoForm.value.usuario;
    const usuarioExiste = this.usuarios.includes(usuario);

    if (usuarioExiste) {
      const confirmacion = confirm('¿Deseas dar de baja a este usuario?');

      if (confirmacion) {
        const index = this.usuarios.indexOf(usuario);
        this.usuarios.splice(index, 1);
        console.log('Usuario eliminado:', usuario);
      }
    } else {
      console.log('El usuario no existe');
    }
  }
}
