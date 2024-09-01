import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminEmail = '';
  adminPassword = '';

  constructor(private authService: AuthService) { }

  onAdminLogin() {
    this.authService.adminLogin(this.adminEmail, this.adminPassword);
  }
}

