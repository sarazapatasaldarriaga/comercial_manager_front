import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Sale {
  id?: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private apiUrl = 'http://localhost:8081/api/sale';

  constructor(private http: HttpClient) {}

  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/list`);
  }
  saveSale(sale: Sale) {
  return this.http.post(`${this.apiUrl}/save`, sale);
}


}
