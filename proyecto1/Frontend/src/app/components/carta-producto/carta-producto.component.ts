import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service'; // servicio para hacer las peticiones del backend

@Component({
  selector: 'app-carta-producto',
  standalone: true,
  imports: [],
  templateUrl: './carta-producto.component.html',
  styleUrl: './carta-producto.component.css',
})
export class CartaProductoComponent {
  productService = inject(ProductsService);
  allproducts: any[] = [];
  //funcion para obtener los productos
  getProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      if (res) {
        this.allproducts = res;
      } else {
        console.error('hubo un error');
      }
    });
  }
  // funcion para mostar los productos
  ngOnInit() {
    this.getProducts();
  }
}
