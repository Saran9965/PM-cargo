import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceivingappComponent } from './receivingapp/receivingapp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReceivingappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rcapp';

}