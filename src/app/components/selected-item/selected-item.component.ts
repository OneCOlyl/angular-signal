import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/fakestore.service';

export const selectedProductsSignal = signal<Product[]>([]);
export const selectedCategoriesSignal = signal<string[]>([]);

@Component({
  selector: 'app-selected-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent {
  selectedProducts = selectedProductsSignal;
  selectedCategories = selectedCategoriesSignal;
}
