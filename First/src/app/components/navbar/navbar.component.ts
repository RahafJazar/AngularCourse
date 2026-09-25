import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  iconImgSrc: string = "/images/carsIcon.png";


  isScroll: boolean = false;
  @HostListener('window:scroll')
  onScroll(): void {
    if (scrollY > 0) {
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }
}
