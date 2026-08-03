import { Component, Input } from '@angular/core';
import { ProductData } from '../../product-data';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true, alias: 'myData', transform: (value: ProductData) => value.title.toUpperCase() }) product: ProductData = {} as ProductData;
  @Input() first: boolean = false;
  @Input() last: boolean = false;
  @Input() index: number = 0;
  @Input() count: number = 0;
}
