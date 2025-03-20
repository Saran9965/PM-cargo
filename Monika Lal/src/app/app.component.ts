import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DispatchComponent } from './dispatch/dispatch.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DispatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form';
}
