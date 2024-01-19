import { Component } from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard'
import { Input } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-clipboard',
  standalone: true,
  imports: [ClipboardModule, FontAwesomeModule],
  templateUrl: './clipboard.component.html',
  styleUrl: './clipboard.component.css'
})

export class ClipboardComponent {

  @Input() contenido: string = "";
  faCopy = faCopy;
  
}
