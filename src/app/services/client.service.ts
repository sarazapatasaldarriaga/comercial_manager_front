import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';




@Injectable({
  providedIn: 'root'
})
export class Clientervice {

  private apiUrl = 'http://localhost:8081/api/client';

  constructor(private http: HttpClient) {}

  getSales(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/list`);
  }
  saveSale(client: Client) {
  return this.http.post(`${this.apiUrl}/save`, client);
}


}
