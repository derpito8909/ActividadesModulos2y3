import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // interactuar con formularios en angular
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'; // libreria para dialogos
import { NavegacionComponent } from '../../components/navegacion/navegacion.component';
import { PiePaginaComponent } from '../../components/pie-pagina/pie-pagina.component';
import { ProductsService } from '../../services/products.service'; // servicio para hacer las peticiones del backend
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    NavegacionComponent,
    PiePaginaComponent,
    CommonModule,
    FormsModule,
    SweetAlert2Module,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  productService = inject(ProductsService);
  allproducts: any[] = [];
  isNewProduct: boolean = false;
  isUpdateProduct: boolean = false;
  name: string = '';
  imagen: string = '';
  price: number = 0;
  id: string = '';

  //funcion para mostrar el formulario de crear productos
  showCreateProductForm(isShowed: boolean) {
    this.isNewProduct = isShowed;
    this.isUpdateProduct = false;
    this.cleanform();
  }
  cleanform() {
    this.name = '';
    this.imagen = '';
    this.price = 0;
  }
  confirmDelete(idProduct: string) {
    if (confirm('Esta seguro de eliminar este registro')) {
      this.deleteProduct(idProduct);
    }
  }
  // funcion que consigue los datos del formulario de crear productos y los envia al sevicio de crear productos
  createProduct() {
    this.postProduct(this.name, this.imagen, this.price);
    this.showCreateProductForm(false);
  }
  showEditProductform(name: string, imagen: string, price: number, id: string) {
    this.isNewProduct = true;
    this.isUpdateProduct = true;
    this.name = name;
    this.imagen = imagen;
    this.price = price;
    this.id = id;
  }
  editProduct() {
    this.putProduct(this.name, this.imagen, this.price, this.id);
    this.showCreateProductForm(false);
  }
  //funcion para obtener los productos
  getProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      if (res) {
        this.allproducts = res;
      } else {
        console.error(res);
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
          console.log(res);
        }
      });
  }
  putProduct(name: string, imagen: string, price: number, id: string) {
    this.isNewProduct = true;

    this.productService
      .putProduct(name, imagen, price, id)
      .subscribe((res: any) => {
        if (res) {
          this.getProducts();
        } else {
          console.log(res);
        }
      });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe((res: any) => {
      if (res) {
        this.getProducts();
      } else {
        console.log(res);
      }
    });
  }

  ngOnInit() {
    this.getProducts();
  }
}
