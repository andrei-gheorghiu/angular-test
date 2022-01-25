import { Injectable } from '@angular/core';
import { SalesService } from "../sales/sales.service";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SalesPercentageService {

  constructor(private productsService: SalesService) {}

  percentage$ = this.productsService.getProducts().pipe(
    map(({ totalValue, data }) => totalValue && data.length
      ? data.reduce((a, b) => a + b.value, 0) * 100 / totalValue
      : 0
    )
  )
}
