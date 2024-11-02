// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'report', component: ReportComponent },
  { path: 'services', component: ServicesComponent }, // As requested earlier
];
