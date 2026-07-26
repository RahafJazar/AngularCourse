import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-gallery',
  imports: [RouterOutlet, RouterLinkActive],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {

}
