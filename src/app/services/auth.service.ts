import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(user: any) {
    // Logic for user registration
  }

  login(email: string, password: string) {
    // Logic for user login
  }

  logout() {
    // Logic for user logout
  }
}
