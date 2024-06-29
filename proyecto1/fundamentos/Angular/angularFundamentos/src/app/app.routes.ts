import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { IndexComponent } from './pages/index/index.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
export const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {
    path: '**',
    component: NoEncontradoComponent,
  },
];
