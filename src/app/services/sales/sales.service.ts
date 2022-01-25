import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsData } from "../../types";
import { Observable, of } from "rxjs";
import { share, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private cache: ProductsData | null = null;
  private pending: Observable<ProductsData> | null = null;

  constructor(private http: HttpClient) {}

  getProducts(refresh = false) {
    if (this.cache && !refresh) {
      return of(this.cache);
    }

    if (!this.pending) {
      this.pending = this.http.get<ProductsData>('https://private-e9ed96-swoproducts.apiary-mock.com/soldProducts')
        .pipe(
          tap(response => {
            this.cache = response;
            this.pending = null;
            // remove cache after 2 minutes:
            setTimeout(() => this.cache = null, 12e4)
          }),
          share()
        );
    }
    return this.pending
  }

}
