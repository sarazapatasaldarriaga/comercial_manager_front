import { Client } from '../models/client.model';
import { SaleItem } from '../models/saleItem.model';


export interface Sale {
  id?: number;
  date: string; 
  client: Client;
  items: SaleItem[];
}
