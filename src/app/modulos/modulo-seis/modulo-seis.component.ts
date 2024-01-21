import { Component } from '@angular/core';
import { ClipboardComponent } from '../../clipboard/clipboard.component';

@Component({
  selector: 'app-modulo-seis',
  standalone: true,
  imports: [ClipboardComponent],
  templateUrl: './modulo-seis.component.html',
  styleUrl: '../modulo.css'
})
export class ModuloSeisComponent {
c611creacionProyecto=
`ng new formulariosAngular
cd formulariosAngular
ng generate component form`

cImpPorCons =
`imprimePorConsola(){
  console.log(this.reactForm.value);
}`;

cCondReactForm = `@if (this.reactForm.get('nombre')?.errors?.['required']) {}`;
cInterpolateException = '{{$index}}'
}
