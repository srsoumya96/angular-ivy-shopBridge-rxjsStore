import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginServiceService } from './login-service.service';
import { ProductServiceService } from './product-service.service';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    ProductListComponent,
    HeaderComponentComponent
  ],
  bootstrap: [AppComponent],
  providers: [LoginServiceService, ProductServiceService]
})
export class AppModule {}
