import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  { path: 'categories', component: CategoriesListComponent }
];
