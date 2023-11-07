import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name?: string;
  user?: string;
  password?: string;
  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

}
