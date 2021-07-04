import { ProductServiceService } from './product-service.service';

export class ProductModel {
  id: number;
  ProductID: string;
  ProductName: string;
  ProductDesc: string;
  Price: string;
  Quantity: string;

  constructor(id, ProductID, ProductName, ProductDesc, Price, Quantity) {
    this.id = id;
    this.ProductID = ProductID;
    this.ProductName = ProductName;
    this.ProductDesc = ProductDesc;
    this.Price = Price;
    this.Quantity = Quantity;
  }
}
