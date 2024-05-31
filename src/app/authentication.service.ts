import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  canProceed = false;
  constructor(private router:Router) { }
  setAuthentication(auth:boolean) {
    if (auth){
      localStorage.setItem("loggedIn", "true");
    }
  }
  canActivate(){
    if (localStorage.getItem("loggedIn") == "true"){
      return true;
    }else
    this.router.navigate(['login']);
    return false;
  }
}



