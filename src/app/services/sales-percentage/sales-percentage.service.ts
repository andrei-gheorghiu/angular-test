import { Injectable } from '@angular/core';
import { SalesService } from "../sales/sales.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SalesPercentageService {

  constructor(private productsService: SalesService) {}

  percentage$ = this.productsService.getProducts().pipe(
    map(({ totalValue, data }) => totalValue && data.length
      ? Math.round(data.reduce((a, b) => a + b.value, 0) * 1e4 / totalValue) / 100
      : 0
    )
  )
}
