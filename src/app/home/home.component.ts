import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../services/services.component';

const routes: Routes = [
  { path: 'services', component: ServicesComponent },
  // Add other routes as needed
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ServicesComponent, RouterModule], // Import RouterModule with routes
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
