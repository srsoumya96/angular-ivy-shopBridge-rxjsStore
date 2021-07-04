import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { ProductServiceService } from '../product-service.service';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  constructor(
    private global: ProductServiceService,
    private router: Router,
    private ngZone: NgZone,
    private loginService: LoginServiceService
  ) {}

  Products: ProductModel[] = [];
  ngOnInit() {
    this.Products = this.global.getProducts();
  }

  addPopup = false;
  id: number;
  pID: string = '';
  pName: string = '';
  pDesc: string = '';
  pPrice: string = '';
  pQuantity: string = '';

  notification = {
    type: '',
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
      ProductDesc: this.pDesc,
      Price: this.pPrice,
      Quantity: this.pQuantity
    };
    this.notification = this.global.addProduct(temp);
    this.pID = '';
    this.pName = '';
    this.pDesc = '';
    this.pPrice = '';
    this.pQuantity = '';
    this.closeAddPopup();
  }
}
