import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
import { ProductService, Product } from '../../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

// ✅ CoreUI imports
import { CardModule, TableModule, ButtonModule } from '@coreui/angular';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    CurrencyPipe,
    HttpClientModule,
    RouterModule,
    CardModule, // ✅ Tarjetas
    TableModule, // ✅ Tablas
    ButtonModule // ✅ Botones CoreUI
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => (this.products = data),
      error: (err: any) => console.error('Error al cargar productos', err)
    });
  }

  goToCreate() {
    this.router.navigate(['/products/new']);
  }
}
