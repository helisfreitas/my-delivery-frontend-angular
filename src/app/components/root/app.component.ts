import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../header/header.component';
import { AppFooterComponent } from '../footer/footer.component';
import { AppNavbarComponent } from '../navbar/navbar.component';
import { AppLayoutComponent } from '../layout/layout.component';
import { AppContentComponent } from '../content/content.component';

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
