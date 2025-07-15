import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakestoreService } from '../services/fakestore.service';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories: string[] = [];

  constructor(private fakestore: FakestoreService) {}

  ngOnInit() {
    this.fakestore.getCategories().subscribe((categories: string[]) => {
      this.categories = categories;
    });
  }
}
