import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string ='';
  password: string ='';
  constructor(private auth: AuthServiceService) { }

  ngOnInit() {
  }

  async login(){
    this.auth.login(this.email, this.password)
  }

}
