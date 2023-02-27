import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomersComponent } from './components/admin/customers/customers.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { AddproductComponent } from './components/admin/addproduct/addproduct.component';
import { DisplayproductsComponent } from './components/displayproducts/displayproducts.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './components/admin/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CustomersComponent,
    OrdersComponent,
    ProductsComponent,
    AddproductComponent,
    DisplayproductsComponent,
    CartPageComponent,
    LoginComponent,
    RegistrationComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
