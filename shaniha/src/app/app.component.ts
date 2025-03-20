import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ForwardingformComponent} from './forwardingform/forwardingform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ForwardingformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form';
  
}