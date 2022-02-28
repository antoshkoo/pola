import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface apiData {
  make: string;
  model: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  public data: apiData[] = [];

  constructor(private http: HttpClient) {}

  getData(): Observable<apiData[]> {
    return this.http.get<apiData[]>(
      'https://www.ag-grid.com/example-assets/row-data.json'
    );
  }
}
