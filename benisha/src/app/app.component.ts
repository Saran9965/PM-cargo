import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceivingformComponent } from './receivingform/receivingform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReceivingformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form';
}
