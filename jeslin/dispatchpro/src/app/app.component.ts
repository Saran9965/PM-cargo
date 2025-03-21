import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dispatchData = { country: '', port: '' };
  isResetEnabled = false;

  saveData() {
    console.log('Saving data:', this.dispatchData);

    // Here, you can make an API call to save data
    // Example: this.http.post('API_URL', this.dispatchData).subscribe();

    this.isResetEnabled = true; // Enable Reset button after saving
  }

  resetForm() {
    this.dispatchData = { country: '', port: '' };
    this.isResetEnabled = false; // Disable Reset button after resetting
  }
}