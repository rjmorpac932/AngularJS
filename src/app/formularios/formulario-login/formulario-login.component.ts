import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: '../formulario.css'
})

export class FormularioLoginComponent  {

  //reactForm : FormGroup;
  reactForm = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
  });
  /*constructor(private formBuilder : FormBuilder){
    this.reactForm = this.formBuilder.group({
      usuario: new FormControl(),
      password: new FormControl()
    })
  }*/

  imprimePorConsola(){
    console.log(this.reactForm.value);
  }

}
