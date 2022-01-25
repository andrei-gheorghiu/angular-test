import { Component, OnInit } from '@angular/core';
import { SalesPercentageService } from "./services/sales-percentage/sales-percentage.service";
import { Observable } from "rxjs";

@Component({
  selector: 'so-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'softwareone-interview';
  percentage$: Observable<number>

  constructor(private salesPercentage: SalesPercentageService) {
    this.percentage$ = this.salesPercentage.percentage$
  }

  ngOnInit() {
    console.log(this.percentage$.subscribe(val => console.log(val)));
  }

}
