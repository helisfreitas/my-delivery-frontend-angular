import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppFooterComponent } from '../app-footer/app-footer.component';
import { AppNavbarComponent } from '../app-navbar/app-navbar.component';
import { AppLayoutComponent } from '../app-layout/app-layout.component';
import { AppContentComponent } from '../app-content/app-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent, AppFooterComponent, AppNavbarComponent, AppLayoutComponent, AppContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-delivery-angular-app';
}
