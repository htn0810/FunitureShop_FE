export interface Product {
  productName: string;
  description: string;
  createdTime?: string;
  updatedTime?: string;
  image: string;
  enabled?: boolean;
  instock?: boolean;
  price: number;
  discountPercent: number;
  categoryId?: number;
  brandId?: number;
}
