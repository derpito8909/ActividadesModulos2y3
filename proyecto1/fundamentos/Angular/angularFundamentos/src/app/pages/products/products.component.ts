import { Component } from '@angular/core';
import { NavegatorComponent } from '../../components/navegator/navegator.component';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavegatorComponent, FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
