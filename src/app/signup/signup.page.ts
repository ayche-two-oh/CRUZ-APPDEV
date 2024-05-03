import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = '';
  password: string = '';
  retypePassword: string = '';
  constructor(private auth: AuthServiceService) { }

  ngOnInit() {
  }

  signUp() {
    this.auth.signUp(this.email, this.password, this.retypePassword);
    this.email = '';
    this.password = '';
    this.retypePassword = '';
  }
}
