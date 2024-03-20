import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.page.html',
})
export class AnotherPage implements OnInit {

  constructor(private roterr: Router, private authenticate:AuthenticationService) { }

  ngOnInit() {
    this.authenticate.authenticate=false;
  }

  ionViewWillEnter(){
    console.log("You will now enter Another page.")
  }
  ionViewDidEnter(){
    console.log("You did enter Another page.")
  }
  ionViewWillLeave(){
    console.log("You will now leave Another page.")
  }
  ionViewDidLeave(){
    console.log("You did leave Another page.")
  }

  goByEvent(){
    this.roterr.navigate(["third-page"]); 
   
    if(this.authenticate.authenticate == true){
      alert("You will proceed to Third page!"); 
    }
  
  }
  goWithAuthorization(){
    this.authenticate.authenticate = true; 
  }

}
