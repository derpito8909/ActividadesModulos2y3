import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegatorComponent } from './components/navegator/navegator.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavegatorComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularFundamentos';
}
