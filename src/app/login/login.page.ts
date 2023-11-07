import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  user?: string;
  password?: string;

  constructor(private authService: AuthService, private router: Router) {}

  LoginAuth() {
    if (this.user && this.password) {
      this.authService.loginUser().subscribe(data => {
        const user = data.find((u: any) => u.user === this.user && u.password === this.password);
        if (user) {
          this.router.navigate(['/dashboard']);
        } else {
          alert('Usuario ou senha incorretos');
        }
      });
    } else {
      alert('Both fields are required.');
    }
  }
}