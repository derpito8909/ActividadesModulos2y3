import { Component } from '@angular/core';
import { NavegacionComponent } from '../../components/navegacion/navegacion.component';
import { PiePaginaComponent } from '../../components/pie-pagina/pie-pagina.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavegacionComponent, PiePaginaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {}
