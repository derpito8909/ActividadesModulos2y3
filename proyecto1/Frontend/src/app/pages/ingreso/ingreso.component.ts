import { Component } from '@angular/core';
import { NavegacionComponent } from '../../components/navegacion/navegacion.component';
import { PiePaginaComponent } from '../../components/pie-pagina/pie-pagina.component';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [NavegacionComponent, PiePaginaComponent],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css',
})
export class IngresoComponent {}
