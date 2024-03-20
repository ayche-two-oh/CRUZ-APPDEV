import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private authorizationService: AuthenticationService ) {}

  ngOnInit(): void {}
  
  ionViewWillEnter(){
    console.log("You will now enter home page.")
  }
  ionViewDidEnter(){
    console.log("You did enter home page.")
  }
  ionViewWillLeave(){
    console.log("You will now leave home page.")
  }
  ionViewDidLeave(){
    console.log("You did leave home page.")
  }


  goWithAuthorization(){
    this.authorizationService.authenticate = true;
  }
  goByEvent(){
    this.router.navigate(["another"])
    if(this.authorizationService.authenticate  == true)
    alert("You will now proceed to next page.")
  
  }

}
