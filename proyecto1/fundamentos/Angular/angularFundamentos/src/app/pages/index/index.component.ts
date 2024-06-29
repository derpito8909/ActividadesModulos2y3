import { Component } from '@angular/core';
import { NavegatorComponent } from '../../components/navegator/navegator.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NavegatorComponent, FooterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {}
