import { Component, inject } from '@angular/core';
import { NavegacionComponent } from '../../components/navegacion/navegacion.component';
import { PiePaginaComponent } from '../../components/pie-pagina/pie-pagina.component';
import { ProductsService } from '../../services/products.service'; // servicio para hacer las peticiones del backend
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NavegacionComponent, PiePaginaComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
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
  ngOnInit() {
    this.getProducts();
  }
}
