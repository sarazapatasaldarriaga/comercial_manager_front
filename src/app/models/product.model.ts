import { Supplier } from './supplier.model';

export interface Product {
  id?: number;
  name: string;
  price: number;
  stock: number;
  supplier: Supplier;
}
