import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-frontend',
  imports: [FormsModule],
  templateUrl: './frontend.component.html',
  styleUrl: './frontend.component.css'
})
export class FrontendComponent {
  todaydate:string='';
  constructor(){
  this.setCurrentDate();
}
setCurrentDate(){
  const today=new Date();
  this.todaydate=today.toISOString().split('T')[0];
}
focusNext(nextElement: HTMLInputElement) {
  if (nextElement) {
    setTimeout(() => {
      nextElement.focus();
    }, 0);
  }
}
}
