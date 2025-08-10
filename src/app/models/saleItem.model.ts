import { Product } from '../models/product.model';


export interface SaleItem {
  id?: number;
  product: Product;
  quantity: number | null;  // puede ser null si no se inicializa
  price: number | null;
}
