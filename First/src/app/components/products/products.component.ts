import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { productsDataResp } from '../../interfaces/products-data.interface';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: []
})
export class ProductsComponent implements OnInit {
  //function injection for service .not constructor injection
  private readonly productsService = inject(ProductsService);

  productsList: productsDataResp = [];

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next: (res) => { console.log(res) },
      error: (err) => { console.error(err); },
      complete: () => { console.log("Completed") }
    });
  }
}
