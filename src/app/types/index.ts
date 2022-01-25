export interface SoldProduct {
  label: string;
  value: number;
}

export interface ProductsData {
  data: SoldProduct[];
  totalValue: number;
}
