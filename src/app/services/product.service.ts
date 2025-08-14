import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface Product {
  id?: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = `${environment.apiUrl}/api/product`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/list`);
  }
  saveProduct(product: Product) {
  return this.http.post(`${this.apiUrl}/save`, product);

  }
   getCountProduct(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }


}
