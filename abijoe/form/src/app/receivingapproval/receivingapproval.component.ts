import { Component } from '@angular/core';

@Component({
  selector: 'app-receivingapproval',
  templateUrl: './receivingapproval.component.html',
  styleUrls: ['./receivingapproval.component.css']
})
export class ReceivingapprovalComponent {
  CurrentDate:string='';
  constructor(){
    this.CurrentDate=new Date().toISOString().split('T')[0];
  }
  moveToNext(event:any) {
    event.preventDefault();
    const inputs = Array.from(document.querySelectorAll<HTMLElement>('.FIELD'));
    const index = inputs.indexOf(event.target as HTMLElement);
    if (index !== -1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  }
}