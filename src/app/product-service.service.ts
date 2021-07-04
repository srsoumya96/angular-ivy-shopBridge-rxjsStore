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
      ProductName: 'Volkswagon - Product 1',
      ProductDesc: 'Description of Product 1',
      Price: '99',
      Quantity: '101'
    },
    {
      id: 2,
      ProductID: '102',
      ProductName: 'Maruti - Product 2',
      ProductDesc: 'Description of Product 2',
      Price: '199',
      Quantity: '201'
    },
    {
      id: 3,
      ProductID: '103',
      ProductName: 'Toyota - Product 3',
      ProductDesc: 'Description of Product 3',
      Price: '299',
      Quantity: '1150'
    },
    {
      id: 4,
      ProductID: '104',
      ProductName: 'Nissan - Product 4',
      ProductDesc: 'Description of Product 4',
      Price: '399',
      Quantity: '900'
    },
    {
      id: 5,
      ProductID: '105',
      ProductName: 'Renault - Product 5',
      ProductDesc: 'Description of Product 5',
      Price: '499',
      Quantity: '720'
    },
    {
      id: 6,
      ProductID: '106',
      ProductName: 'Tata Motors - Product 6',
      ProductDesc: 'Description of Product 6',
      Price: '599',
      Quantity: '480'
    },
    {
      id: 7,
      ProductID: '107',
      ProductName: 'Land rover - Product 7',
      ProductDesc: 'Description of Product 7',
      Price: '699',
      Quantity: '650'
    },
    {
      id: 8,
      ProductID: '108',
      ProductName: 'Mazda - Product 8',
      ProductDesc: 'Description of Product 8',
      Price: '799',
      Quantity: '350'
    },
    {
      id: 9,
      ProductID: '109',
      ProductName: 'Audi - Product 9',
      ProductDesc: 'Description of Product 9',
      Price: '899',
      Quantity: '250'
    },
    {
      id: 10,
      ProductID: '110',
      ProductName: 'BMW - Product 10',
      ProductDesc: 'Description of Product 10',
      Price: '999',
      Quantity: '150'
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
    console.log(prod);
    console.log(temp);
    if (temp != -1) {
      this.products[temp] = {
        id: prod.id,
        ProductID: prod.ProductID,
        ProductName: prod.ProductName,
        ProductDesc: prod.ProductDesc,
        Price: prod.Price,
        Quantity: prod.Quantity
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
