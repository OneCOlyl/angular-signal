import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakestoreService } from '../../services/fakestore.service';
import { selectedCategoriesSignal } from '../selected-item/selected-item.component';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories: string[] = [];
  selectedCategories = selectedCategoriesSignal;

  constructor(private fakestore: FakestoreService) {}

  ngOnInit() {
    this.fakestore.getCategories().subscribe((categories: string[]) => {
      this.categories = categories;
    });
  }

  toggleCategory(category: string) {
    const current = this.selectedCategories();
    if (current.includes(category)) {
      this.selectedCategories.set(current.filter(c => c !== category));
    } else {
      this.selectedCategories.set([...current, category]);
    }
  }
}
