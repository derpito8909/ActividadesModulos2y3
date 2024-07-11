import { Component, inject } from '@angular/core';
import { NavegacionComponent } from '../../components/navegacion/navegacion.component';
import { PiePaginaComponent } from '../../components/pie-pagina/pie-pagina.component';
import { CartaProductoComponent } from '../../components/carta-producto/carta-producto.component';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NavegacionComponent, PiePaginaComponent, CartaProductoComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent {}
