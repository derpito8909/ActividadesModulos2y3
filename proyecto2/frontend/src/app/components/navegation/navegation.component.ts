import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navegation',
  standalone: true,
  imports: [LoginComponent, RegisterComponent, CommonModule],
  templateUrl: './navegation.component.html',
  styleUrl: './navegation.component.css',
})
export class NavegationComponent {
  isVisibleLogin: boolean = false;
  isVisibleRegister: boolean = false;
  toogleLogin() {
    this.isVisibleLogin = !this.isVisibleLogin;
    this.isVisibleRegister = false;
  }
  toogleRegister() {
    this.isVisibleRegister = !this.isVisibleRegister;
    this.isVisibleLogin = false;
  }
}
