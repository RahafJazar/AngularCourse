import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';


@Component({
  selector: 'app-gallery',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {

}
