import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrderService {
  make?: string;
  model?: string;
  price?: number;
}
