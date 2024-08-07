import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  httpClient = inject(HttpClient);
  API_URL_GET = 'http://localhost:3000/obtenerProductos';
  API_URL_POST = 'http://localhost:3000/registarProductos';
  API_URL_PUT = 'http://localhost:3000/actualizarProducto';
  API_URL_DELETE = 'http://localhost:3000/eliminarProducto';

  // OBTENER DATOS
  getProducts() {
    return this.httpClient.get(this.API_URL_GET);
  }
  // CREAR DATOS
  postProduct(nombre: string, imagen: string, precio: number) {
    const infoProducto = {
      nombre: nombre,
      imagen: imagen,
      precio: precio,
    };
    return this.httpClient.post(this.API_URL_POST, infoProducto);
  }
  // MODIFICAR DATOS

  putProduct(nombre: string, imagen: string, precio: number, id: string) {
    const infoProducto = {
      nombre: nombre,
      imagen: imagen,
      precio: precio,
    };
    return this.httpClient.put(`${this.API_URL_PUT}/${id}`, infoProducto);
  }
  // ELLMINAR
  deleteProduct(id: string) {
    return this.httpClient.delete(`${this.API_URL_DELETE}/${id}`);
  }
}
