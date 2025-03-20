import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operationstatus',
  imports: [FormsModule,CommonModule],
  templateUrl: './operationstatus.component.html',
  styleUrl: './operationstatus.component.css'
})
export class OperationstatusComponent {
  currentDate: string = '';
  
  isSearchClicked = false;
  constructor() {
    
    this.currentDate = new Date().toISOString().split('T')[0];
  }
    moveToNext(event: any) {  
      event.preventDefault(); 

      const inputs = Array.from(document.querySelectorAll<HTMLElement>('.field'));
      const index = inputs.indexOf(event.target as HTMLElement);
  
      
      const nextIndex = (index + 1) % inputs.length;
      inputs[nextIndex].focus();
    }

    consignmentData = [
      { consignmentNo: 'CN12345', shipmentNo: 'SHP98765', destinationPort: 'New York', originWarehouse: 'Los Angeles', totalWeight: '500 kg', totalCarton: 10, date: '2025-03-15' },
      { consignmentNo: 'CN67890', shipmentNo: 'SHP54321', destinationPort: 'London', originWarehouse: 'Paris', totalWeight: '300 kg', totalCarton: 5, date: '2025-03-17' },
      { consignmentNo: 'CN11223', shipmentNo: 'SHP67891', destinationPort: 'Dubai', originWarehouse: 'Mumbai', totalWeight: '700 kg', totalCarton: 15, date: '2025-03-18' },
      { consignmentNo: 'CN44556', shipmentNo: 'SHP99887', destinationPort: 'Singapore', originWarehouse: 'Hong Kong', totalWeight: '200 kg', totalCarton: 8, date: '2025-03-16' },
      { consignmentNo: 'CN77889', shipmentNo: 'SHP77665', destinationPort: 'Tokyo', originWarehouse: 'Shanghai', totalWeight: '600 kg', totalCarton: 12, date: '2025-03-18' },
      { consignmentNo: 'CN99112', shipmentNo: 'SHP55443', destinationPort: 'Berlin', originWarehouse: 'Frankfurt', totalWeight: '250 kg', totalCarton: 6, date: '2025-03-14' },
    ];
    
    
    searchData() {
      this.isSearchClicked = true;
      
    }
    updatedData = [
      { operationDate: '18-03-2025', hawbStatus: 'Pending' },
      { operationDate: '17-03-2025', hawbStatus: 'Delivered' },
      { operationDate: '16-03-2025', hawbStatus: 'In Transit' }
    ];
    selectedRightRow = { operationDate: '', hawbStatus: '' };
selectedRightIndex: number | null = null;

editRightTableRow(item: any, index: number) {
  this.selectedRightRow = { ...item }; 
  this.selectedRightIndex = index;
}


  }


