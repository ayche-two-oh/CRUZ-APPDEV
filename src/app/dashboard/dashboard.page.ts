import { Component, OnInit } from "@angular/core";
import { Show } from "../modal/modal";
import { DataService } from "../data.service";
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";
import { ModalComponent } from "../modal/modal.component";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  shows: Show[] = [];
  constructor(private data: DataService, private authenticate: AuthenticationService, private route: Router, private modalController: ModalController){ }

  ngOnInit(){
    this.authenticate.canProceed = false;
    this.data.getShows().subscribe(item => {
      this.shows = item;
      console.log(item);
    })
  }

  async toggleModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    return await modal.present();
  }

  logOut() {
    this.authenticate.canProceed = false;
    this.route.navigate(['login']);
  }

  
}