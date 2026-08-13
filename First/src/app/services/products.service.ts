import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productsDataResp } from '../interfaces/products-data.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //function injection.not constructor injection
  private readonly httpClient = inject(HttpClient);

  getAllProducts(): Observable<productsDataResp> {
    return this.httpClient.get<productsDataResp>("https://fakestoreapi.com/products");

  }
}
