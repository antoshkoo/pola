import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements ICellRendererAngularComp {
  public cellValue?: string;
  constructor(private orderService: OrderService) {}
  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
  }

  refresh(params: ICellRendererParams) {
    this.cellValue = this.getValueToDisplay(params);
    return true;
  }

  doOrder(event: any) {
    this.orderService.make = event.data.make;
    this.orderService.model = event.data.model;
    this.orderService.price = event.data.price;
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
}
