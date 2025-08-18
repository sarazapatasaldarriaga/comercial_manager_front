import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = `${environment.apiUrl}/api/client`;

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/list`);
  }

  saveClient(client: Client): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, client);
  }

  countClients(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }
}
