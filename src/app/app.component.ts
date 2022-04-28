import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';
import { ButtonComponent } from './components/button/button.component';
import { ApiService } from './services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderFormComponent } from './components/order-form/order-form.component';

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

  constructor(private apiService: ApiService, public dialog: MatDialog) {
    this.rowData = this.apiService.getData();
  }

  openDialog(event: any) {
    this.dialog.open(OrderFormComponent, {
      data: event.data,
    });
  }
}
