import { ProductServiceService } from './product-service.service';

export class ProductModel {
  id: number;
  ProductID: string;
  ProductName: string;
  ProductDesc: string;

  constructor(id, ProductID, ProductName, ProductDesc) {
    this.id = id;
    this.ProductID = ProductID;
    this.ProductName = ProductName;
    this.ProductDesc = ProductDesc;
  }
}
