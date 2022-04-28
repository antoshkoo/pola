import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  make: string;
  model: string;
  price: number;
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {
  showComplete = false;

  orderForm: FormGroup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    userPhone: new FormControl('+7', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(12),
    ]),
    userEmail: new FormControl('', [Validators.email]),
    dateDelivery: new FormControl(''),
    userOrder: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onSubmit() {
    this.showComplete = true;
  }
}
