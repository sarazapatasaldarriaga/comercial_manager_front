import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
import { SaleService, Sale } from '../../../services/sale.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

// ✅ CoreUI imports
import { CardModule, TableModule, ButtonModule } from '@coreui/angular';

@Component({
  selector: 'app-sale-list',
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
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss']
})
export class SaleListComponent {
  sales: Sale[] = [];

  constructor(
    private saleService: SaleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.saleService.getSales().subscribe({
      next: (data: Sale[]) => (this.sales = data),
      error: (err: any) => console.error('Error al cargar saleos', err)
    });
  }

  goToCreate() {
    this.router.navigate(['/sales/new']);
  }
}
