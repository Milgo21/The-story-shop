import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'', component: HomepageComponent},
  {path:'', loadComponent: () => import('./components/homepage/homepage.component').then(c => c.HomepageComponent)},
  {path:'login', loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent)},
  {path:'register', loadComponent: () => import('./components/registration/registration.component').then(c => c.RegistrationComponent)},
  {path:'products', loadComponent: () => import('./components/displayproducts/displayproducts.component').then(c => c.DisplayproductsComponent)},
  {path:'admin', loadComponent: () => import('./components/admin/admin.component').then(c => c.AdminComponent),
     children: [
      {path: 'products', loadComponent: () => import('./components/admin/products/products.component').then(c => c.ProductsComponent)},
      {path: 'orders', loadComponent: () => import('./components/admin/orders/orders.component').then(c => c.OrdersComponent)},
      {path: 'customers', loadComponent: () => import('./components/admin/customers/customers.component').then(c => c.CustomersComponent)},
      {path: 'add-product', loadComponent: () => import('./components/admin/addproduct/addproduct.component').then(c => c.AddproductComponent)}
     ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
