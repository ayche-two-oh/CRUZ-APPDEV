import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.page.html',
})
export class ThirdPagePage implements OnInit {

  constructor(private route: Router, private authenticate:AuthenticationService) { }
  goByEvent(){
    this.route.navigate(["third-page"]);
  }

  goWithAuthorization(){
    // for authorization
    this.authenticate.authenticate = true;
  }
  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log("You will now enter Third page.")
  }
  ionViewDidEnter(){
    console.log("You did enter Third page.")
  }
  ionViewWillLeave(){
    console.log("You will now leave Third page.")
  }
  ionViewDidLeave(){
    console.log("You did leave Third page.")
  }

}
