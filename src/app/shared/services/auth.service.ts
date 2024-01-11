declare var google: any;
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);

  constructor() {}
  signOut() {
    google.accounts.id.disableAutoSelect();

    console.log('yash');
    sessionStorage.removeItem('loggedInUser');
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['/']);
  }
}
