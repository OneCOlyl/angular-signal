import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SelectedItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
