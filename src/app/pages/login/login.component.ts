declare var google: any;
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google;
    google.accounts.id.initialize({
      client_id:
        '810734831877-sq4uitm850l2sn2t9al3s50a2nvvchkh.apps.googleusercontent.com',
      callback: (resp: any) => {
        console.log(resp);
        this.handleLogin(resp);
      },
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350,
    });
  }
  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response: any) {
    console.log(response);
    if (response) {
      //decode the token
      const payLoad = this.decodeToken(response.credential);
      //store in session
      sessionStorage.setItem('loggedInUser', JSON.stringify(payLoad));

      //navigate to home/browse
      this.router.navigate(['browse']);
    } else {
      console.log('yash');
    }
  }
}
