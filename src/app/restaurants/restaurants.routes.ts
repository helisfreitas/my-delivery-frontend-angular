import { Routes } from '@angular/router';
import { RestaurantsComponent } from './component/restaurants.component';

export const routes: Routes = [
    
    { path: '', component: RestaurantsComponent },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
    { path: '**', redirectTo: '' }
];
