import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  constructor(private global: ProductServiceService) {}

  Products: ProductModel[] = [];
  ngOnInit() {
    this.Products = this.global.getProducts();
  }

  addPopup = false;
  id: number;
  pID: string = '';
  pName: string = '';
  pDesc: string = '';

  notification = {
    type : '',
    message: ''
  };
  
  openAddPopup() {
    this.addPopup = true;
  }

  closeAddPopup() {
    this.addPopup = false;
  }

  addProduct() {
    let temp: ProductModel = {
      id: this.Products.length + 1,
      ProductID: this.pID,
      ProductName: this.pName,
      ProductDesc: this.pDesc
    };
    this.notification = this.global.addProduct(temp);
    this.closeAddPopup();
  }
}
