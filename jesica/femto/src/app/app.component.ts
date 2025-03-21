import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewTableComponent } from './preview-table/preview-table.component';
import { ReceivingComponent } from './receiving/receiving.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PreviewTableComponent,ReceivingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bm-cargo';
}
