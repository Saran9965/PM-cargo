import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  forwardingDate: string = '';

  constructor() {
    this.setCurrentDate();
  }

  setCurrentDate() {
    const today = new Date();
    this.forwardingDate = today.toISOString().split('T')[0];
  }

}
