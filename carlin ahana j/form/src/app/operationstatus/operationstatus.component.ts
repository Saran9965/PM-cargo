import { Component } from '@angular/core';

@Component({
  selector: 'app-operationstatus',
  imports: [],
  templateUrl: './operationstatus.component.html',
  styleUrl: './operationstatus.component.css'
})
export class OperationstatusComponent {
  currentDate: string = '';
  consignmentNo: string = '';
  operationStatus: string = '';
  operationDate: string = '';
  remarks: string = '';

  dataset = [
    { 
      serialNo: 1, 
      consignmentNo: "CNS12345", 
      shipmentNo: "SHP56789", 
      destinationPort: "New York", 
      originWarehouse: "Los Angeles", 
      totalWgt: "500 KG", 
      totalCarton: 20 
    },
    { 
      serialNo: 2, 
      consignmentNo: "CNS67890", 
      shipmentNo: "SHP11223", 
      destinationPort: "London", 
      originWarehouse: "Dubai", 
      totalWgt: "750 KG", 
      totalCarton: 30 
    }

  ];
  
    constructor() {
      this.currentDate = new Date().toISOString().split('T')[0];
    }
  
    moveToNext(event: any) {
      event.preventDefault();
  
      const inputs = Array.from(document.querySelectorAll<HTMLElement>('.field'));
      const index = inputs.indexOf(event.target as HTMLElement);
  
      if (index !== -1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
    

    deleteInputs(){
      this.consignmentNo='';
      this.operationStatus='';
      this.operationDate='';
      this.remarks='';

    }
  }
  


