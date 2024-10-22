import { Routes } from '@angular/router';
import { MarketplaceComponent } from './component/marketplace.component';
export const routes: Routes = [
    
    { path: '', component: MarketplaceComponent },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
    { path: '**', redirectTo: '' }
];
