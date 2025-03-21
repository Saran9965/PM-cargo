import { Component } from '@angular/core';

@Component({
  selector: 'app-preview-table',
  templateUrl: './preview-table.component.html',
  styleUrls: ['./preview-table.component.css']
})
export class PreviewTableComponent {
  data = [
    {
      packingList: 'PL-001',
      receivingDate: '2025-03-15',
      sourceBranch: 'Chennai',
      totalPcs: 10,
      totalWeight: '50kg',
      mode: 'Air',
      receivedBy: 'Admin'
    },
    {
      packingList: 'PL-002',
      receivingDate: '2025-03-16',
      sourceBranch: 'Mumbai',
      totalPcs: 5,
      totalWeight: '25kg',
      mode: 'Truck',
      receivedBy: 'Manager'
    }
  ];
}
