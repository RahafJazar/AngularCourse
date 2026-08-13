import { Component, signal } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';




@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, AboutComponent, ContactComponent, ProductsComponent, FooterComponent, RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('First');
}
