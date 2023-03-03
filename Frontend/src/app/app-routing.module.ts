import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  // {path:'', component: HomepageComponent},
  { path: '', loadComponent: () => import('./components/homepage/homepage.component').then(h => h.HomepageComponent) },
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(l => l.LoginComponent) },
  { path: 'register', loadComponent: () => import('./components/registration/registration.component').then(r => r.RegistrationComponent) },
  { path: 'cart', loadComponent: () => import('./components/cart-page/cart-page.component').then(c => c.CartPageComponent) },
  { path: 'products', canActivate:[AuthGuardService],loadComponent: () => import('./components/displayproducts/displayproducts.component').then(d => d.DisplayproductsComponent) },
  {
    path: 'admin', loadComponent: () => import('./components/admin/admin.component').then(c => c.AdminComponent),
    children: [
      { path: 'admin', loadComponent: () => import('./components/admin/products/products.component').then(c => c.ProductsComponent) },
      { path: 'orders', loadComponent: () => import('./components/admin/orders/orders.component').then(c => c.OrdersComponent) },
      { path: 'customers', loadComponent: () => import('./components/admin/customers/customers.component').then(c => c.CustomersComponent) },
      { path: 'add-product', loadComponent: () => import('./components/admin/addproduct/addproduct.component').then(c => c.AddproductComponent) }
    ]
  },
  { path: '**', loadComponent: () => import('./components/page-not-found/page-not-found.component').then(p => p.PageNotFoundComponent) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
