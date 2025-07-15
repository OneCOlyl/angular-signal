import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakestoreService, Product } from '../../services/fakestore.service';
import { selectedProductsSignal } from '../selected-item/selected-item.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  selectedProducts = selectedProductsSignal;

  constructor(private fakestore: FakestoreService) {}

  ngOnInit() {
    this.fakestore.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  toggleProduct(product: Product) {
    const current = this.selectedProducts();
    if (current.some(p => p.id === product.id)) {
      this.selectedProducts.set(current.filter(p => p.id !== product.id));
    } else {
      this.selectedProducts.set([...current, product]);
    }
  }

  isSelected(product: Product): boolean {
    return this.selectedProducts().some(p => p.id === product.id);
  }
}
