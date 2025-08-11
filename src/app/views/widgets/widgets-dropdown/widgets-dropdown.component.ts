import { ProductService } from '../../../services/product.service';
import { ClientService } from '../../../services/client.service';
import { SupplierService } from '../../../services/supplier.service';
import { SaleService } from '../../../services/sale.service';
import { Product } from '../../../models/product.model';
import { Client } from '../../../models/client.model';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, inject, OnInit, viewChild } from '@angular/core';
import { getStyle } from '@coreui/utils';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { RouterLink } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import {
  ButtonDirective,
  ColComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  RowComponent,
  TemplateIdDirective,
  WidgetStatAComponent
} from '@coreui/angular';





@Component({
  selector: 'app-widgets-dropdown',
   templateUrl: './widgets-dropdown.component.html',
    imports: [RowComponent, ColComponent, WidgetStatAComponent, TemplateIdDirective, IconDirective, DropdownComponent, ButtonDirective, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, RouterLink, DropdownDividerDirective, ChartjsComponent]

})
export class WidgetsDropdownComponent implements OnInit {
  products: Product[] = [];
  productCount: number = 0;
  clientstCount: number = 0;
  supplierCount: number = 0;
  saleCount: number = 0;
  clients: Client[] = [];
  loadingProducts = false;
  loadingClients = false;
  errorProducts: string | null = null;
  errorClients: string | null = null;

  constructor(
    private productService: ProductService,
    private clientService: ClientService,
    private saleService: SaleService,
    private supplierService: SupplierService,
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadClients();
    this.loadSale();
    this.loadSupplier();
  }

  loadProducts(): void {
    this.loadingProducts = true;
    this.errorProducts = null;
    this.productService.getCountProduct().subscribe({
      next: (data) => {
        this.productCount = data;
        this.loadingProducts = false;
      },
      error: (err) => {
        this.errorProducts = 'Error cargando productos';
        this.loadingProducts = false;
      }
    });
  }

  loadClients(): void {
    this.loadingClients = true;
    this.errorClients = null;
    this.clientService.getCountClients().subscribe({
      next: (data) => {
        this.clientstCount = data;
        this.loadingClients = false;
      },
      error: (err) => {
        this.errorClients = 'Error cargando clientes';
        this.loadingClients = false;
      }
    });
  }
  loadSupplier(): void {
    this.loadingClients = true;
    this.errorClients = null;
    this.supplierService.getCountSupplier().subscribe({
      next: (data) => {
        this.supplierCount = data;
        this.loadingClients = false;
      },
      error: (err) => {
        this.errorClients = 'Error cargando clientes';
        this.loadingClients = false;
      }
    });
  }
  loadSale(): void {
    this.loadingClients = true;
    this.errorClients = null;
    this.saleService.getCountSale().subscribe({
      next: (data) => {
        this.saleCount = data;
        this.loadingClients = false;
      },
      error: (err) => {
        this.errorClients = 'Error cargando clientes';
        this.loadingClients = false;
      }
    });
  }
}
