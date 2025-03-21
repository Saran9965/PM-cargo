import { Component } from '@angular/core';
import { FrontendComponent } from './frontend/frontend.component';

@Component({
  selector: 'app-root',
  imports:[FrontendComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
