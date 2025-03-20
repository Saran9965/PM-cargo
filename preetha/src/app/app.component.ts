import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OperationstatusComponent } from './operationstatus/operationstatus.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,OperationstatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form';
  
}



