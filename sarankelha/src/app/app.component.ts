import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecvComponent } from './recv/recv.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RecvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'receivingform';
}
