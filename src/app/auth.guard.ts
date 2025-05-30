import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (user && user.username) {
      // User is logged in
      return true;
    } else {
      // Not logged in, redirect to login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
