import { Component } from '@angular/core';
import { ReceivingapprovalComponent } from './receivingapproval/receivingapproval.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [ReceivingapprovalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form';
}
