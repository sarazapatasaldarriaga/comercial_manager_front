import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { SupplierService } from '../../../services/supplier.service';
import { Product } from '../../../models/product.model';
import { Supplier } from '../../../models/supplier.model';
import { CardModule } from '@coreui/angular';

@Component({
  selector: 'app-product-form',
  standalone: true, // Esto lo hace independiente
  imports: [CommonModule, FormsModule,CardModule],
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0,
    stock: 0,
    supplier: { id: 0, name: '' }
  };

  suppliers: Supplier[] = [];

  constructor(
    private productService: ProductService,
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.supplierService.getSuppliers().subscribe(data => {
      this.suppliers = data;
    });
    
  }

  // Método para manejar cambio de proveedor
  onSupplierChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedSupplierId = Number(selectElement.value);
    this.product.supplier = { id: selectedSupplierId } as Supplier;
  }

  saveProduct(): void {
    if (!this.product.id) {
      delete this.product.id;
    }
    this.productService.saveProduct(this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
