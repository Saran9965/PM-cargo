import { Component } from '@angular/core';

@Component({
  selector: 'app-Forwardingform',
  imports: [],
  templateUrl: './forwardingform.component.html',
  styleUrl: './forwardingform.component.css'
})
export class ForwardingformComponent {
  currentDate:string='';
  currentPage: number = 1;
  rowsPerPage: number = 10;
  totalRows: number = 0;
  constructor(){
    this.currentDate=new Date().toISOString().split('T')[0];
  }
  moveToNext(event: any) {
    event.preventDefault(); 

  const inputs = Array.from(document.querySelectorAll<HTMLElement>('.field'));
  const index = inputs.indexOf(event.target as HTMLElement);

  if (index !== -1 && index < inputs.length - 1) {
    inputs[index + 1].focus();
  } else if (index === inputs.length - 1) {
   
    inputs[0].focus();
  }
}
showSuccessPopup(event: any) {
  event.preventDefault();
  alert('Success: Received successfully!');
  this.moveToNext(event);  
}
  ngOnInit() {
    this.updateTotalRows();
    this.showPage(this.currentPage);
  }
  updateTotalRows() {
    this.totalRows = document.querySelectorAll('#tableBody tr').length;
  }

  showPage(page: number): void {
    const rows = Array.from(document.querySelectorAll('#tableBody tr')) as HTMLElement[];
    const start = (page - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;

    rows.forEach((row, index) => {
      (row as HTMLElement).style.display = index >= start && index < end ? '' : 'none';
    });
    this.updateButtonState();
  
  }

  nextPage() {
    if ((this.currentPage * this.rowsPerPage) < this.totalRows) {
      this.currentPage++;
      this.showPage(this.currentPage);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.showPage(this.currentPage);
    }
  }
  updateButtonState() {
    const nextButton = document.querySelector('.nav-btn:last-child') as HTMLButtonElement | null;
    if (nextButton) {
      nextButton.disabled = this.currentPage * this.rowsPerPage >= this.totalRows;
    }
  }
  resetFields(event: any) {
    event.preventDefault();
  
    // Get all input and select fields and clear their values
    const inputs = Array.from(document.querySelectorAll<HTMLInputElement | HTMLSelectElement>('.field'));
    inputs.forEach(input => {
      if (input.tagName === 'SELECT') {
        (input as HTMLSelectElement).selectedIndex = 0; // Reset select to the first option
      } else if (input.type === 'text' || input.type === 'date') {
        input.value = ''; // Clear text and date inputs
      }
    });
  
    this.moveToNext(event);  // Move to the next field after resetting
  }

}