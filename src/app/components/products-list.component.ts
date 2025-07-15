import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakestoreService, Product } from '../services/fakestore.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private fakestore: FakestoreService) {}

  ngOnInit() {
    this.fakestore.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
}
