import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, NavbarComponent, ContactComponent, AboutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('First');
}
