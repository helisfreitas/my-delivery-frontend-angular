import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    
    { path: '', component: HomepageComponent },
    { path: 'marketplace', loadChildren: () => import('./marketplace/marketplace.module').then(m => m.MarketplaceModule) },    
    { path: 'portal', loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule) },
    { path: '**', redirectTo: '' }
];
