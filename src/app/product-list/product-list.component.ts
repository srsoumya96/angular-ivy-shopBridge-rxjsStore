import { Component, Input, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() data: ProductModel[];
  constructor(private global: ProductServiceService) {}

  notification = {
    type: '',
    message: ''
  };

  tempProd: ProductModel;

  ngOnInit() {
    this.data = this.global.getProducts();
  }

  deletePopup = false;
  openDeletePopup(id) {
    this.id = id;
    this.deletePopup = true;
  }

  closeDeletePopup() {
    this.deletePopup = false;
  }

  deleteProduct() {
    this.notification = this.global.deleteProduct(this.id);
    this.ngOnInit();
    this.closeDeletePopup();
  }

  id: number;
  pID: string = '';
  pName: string = '';
  pDesc: string = '';

  editPopup = false;
  openEditPopup(id) {
    let tempProd = this.data.find(e => e.id == id);
    console.log(tempProd);
    this.id = id;
    this.pName = tempProd.ProductName;
    this.pID = tempProd.ProductID;
    this.pDesc = tempProd.ProductDesc;
    this.editPopup = true;
  }
  editProduct() {
    let tempProd: ProductModel = {
      id: this.id,
      ProductName: this.pName,
      ProductDesc: this.pDesc,
      ProductID: this.pID
    };

    this.notification = this.global.editProduct(tempProd);

    this.ngOnInit();
    this.closeEditPopup();
  }

  closeEditPopup() {
    this.editPopup = false;
  }
}
