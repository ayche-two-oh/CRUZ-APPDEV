import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  ionViewWillEnter(){
    console.log("You will now enter shared component.")
  }
  ionViewDidEnter(){
    console.log("You did enter shared component.")
  }
  ionViewWillLeave(){
    console.log("You will now leave shared component.")
  }
  ionViewDidLeave(){
    console.log("You did leave shared component.")
  }

}
