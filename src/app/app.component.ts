import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';
import { ButtonComponent } from './components/button/button.component';

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
  };

  rowData: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.rowData = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/small-row-data.json'
    );
  }
}
