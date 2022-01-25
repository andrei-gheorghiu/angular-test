import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface SoldProduct {
  label: string;
  value: number;
}

export interface ProductsData {
  data: SoldProduct[];
  totalValue: number;
}

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductsData>('https://private-e9ed96-swoproducts.apiary-mock.com/soldProducts')
  }

}
