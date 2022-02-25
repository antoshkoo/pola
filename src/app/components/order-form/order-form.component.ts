import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {
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
  });

  onSubmit() {
    console.log(this.orderForm.value);
  }
}
