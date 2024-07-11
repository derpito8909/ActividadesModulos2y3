import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // interactuar con formularios en angular
import { NavegacionComponent } from '../../components/navegacion/navegacion.component';
import { PiePaginaComponent } from '../../components/pie-pagina/pie-pagina.component';
import { ProductsService } from '../../services/products.service'; // servicio para hacer las peticiones del backend
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NavegacionComponent, PiePaginaComponent, CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  productService = inject(ProductsService);
  allproducts: any[] = [];
  isNewProduct: boolean = false;
  name: string = '';
  imagen: string = '';
  price: number = 0;

  //funcion para mostrar el formulario de crear productos
  showCreateProductForm(isShowed: boolean) {
    this.isNewProduct = isShowed;
    this.cleanform();
  }
  cleanform() {
    this.name = '';
    this.imagen = '';
    this.price = 0;
  }
  // funcion que consigue los datos del formulario de crear productos y los envia al sevicio de crear productos
  createProduct() {
    this.postProduct(this.name, this.imagen, this.price);
    this.showCreateProductForm(false);
  }
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
  //funcion para crear los productos
  postProduct(name: string, imagen: string, price: number) {
    this.productService
      .postProduct(name, imagen, price)
      .subscribe((res: any) => {
        if (res) {
          this.getProducts();
        } else {
          console.log('hubo un error');
        }
      });
  }

  ngOnInit() {
    this.getProducts();
  }
}
