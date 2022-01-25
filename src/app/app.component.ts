import { Component } from '@angular/core';
import { SalesPercentageService } from "./services/sales-percentage/sales-percentage.service";
import { Observable } from "rxjs";
import { ProductsData } from "./types";
import { SalesService } from "./services/sales/sales.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'so-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  productData$: Observable<ProductsData>;
  percentage$: Observable<number>;
  productDetails$: Observable<any>;

  constructor(
    private salesPercentage: SalesPercentageService,
    private salesService: SalesService
  ) {
    this.percentage$ = this.salesPercentage.percentage$;
    this.productData$ = this.salesService.getProducts();
    this.productDetails$ = this.productData$.pipe(
      map(({ data, totalValue }) => ({
        totalSold: data.reduce((a, b) => a + b.value, 0),
        percentage: totalValue ? data.reduce((a, b) => a + b.value, 0) * 100 / totalValue : 0
      }))
    )
  }
}
