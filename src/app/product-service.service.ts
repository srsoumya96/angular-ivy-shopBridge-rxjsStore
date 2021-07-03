import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor() {}

  products: ProductModel[] = [
    {
      id: 1,
      ProductID: '101',
      ProductName: 'AAA',
      ProductDesc: 'ZZZZZ'
    },
    {
      id: 2,
      ProductID: '102',
      ProductName: 'AAA',
      ProductDesc: 'ZZZZZ'
    },
    {
      id: 3,
      ProductID: '103',
      ProductName: 'AAA',
      ProductDesc: 'ZZZZZ'
    },
    {
      id: 4,
      ProductID: '104',
      ProductName: 'AAA',
      ProductDesc: 'ZZZZZ'
    }
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id) {
    let prod = this.products.filter(e => e.id == id);

    return prod[0];
  }

  addProduct(prod: ProductModel) {
    let temp = this.products.find(e => e.ProductID == prod.ProductID);

    if (!temp) {
      this.products.push(prod);
      return { type: 'Success', message: 'Product Added Successfully.' };
    } else {
      return { type: 'Error', message: 'Product already exists in Database.' };
    }
  }

  editProduct(prod: ProductModel) {
    let temp = this.products.findIndex(e => e.id == prod.id);
    if (!!temp) {
      this.products[temp] = {
        id: prod.id,
        ProductID: prod.ProductID,
        ProductName: prod.ProductName,
        ProductDesc: prod.ProductDesc
      };

      return { type: 'Success', message: 'Changes saved Successfully.' };
    } else {
      return { type: 'Error', message: 'Server Error.' };
    }
  }

  deleteProduct(id) {
    let index = this.products.findIndex(e => e.id == id);
    console.log(index);
    if (index != -1) {
      this.products.splice(index, 1);
      return { type: 'Success', message: 'Product Deleted Successfully.' };
    } else {
      return { type: 'Error', message: 'Server Error.' };
    }
  }
}
