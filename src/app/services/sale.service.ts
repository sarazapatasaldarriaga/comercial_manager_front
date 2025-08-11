import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { SaleItem } from '../models/saleItem.model';
import { Sale } from '../models/sale.model'

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private apiUrl = 'http://localhost:8081/api/sales';

  constructor(private http: HttpClient) {}

  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/list`);
  }
  saveSale(sale: Sale) {
  return this.http.post(`${this.apiUrl}/save`, sale);
}

getCountSale(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }

}
