import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';
import { ButtonComponent } from './components/button/button.component';
import { OrderService } from './services/order.service';
import { ApiService } from './services/api.service';

export interface apiData {
  make: string;
  model: string;
  price: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public columnDefs: ColDef[] = [
    {
      field: 'make',
      sortable: true,
      filter: true,
      rowDrag: true,
    },
    { field: 'model' },
    { field: 'price' },
    {
      field: 'action',
      cellRenderer: ButtonComponent,
      sortable: false,
      filter: false,
    },
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  rowData: Observable<apiData[]>;

  constructor(
    private apiService: ApiService,
    private orderService: OrderService
  ) {
    this.rowData = this.apiService.getData();
  }

  click(event: any) {
    this.orderService.make = event.data.make;
    this.orderService.model = event.data.model;
    this.orderService.price = event.data.price;
  }
}
