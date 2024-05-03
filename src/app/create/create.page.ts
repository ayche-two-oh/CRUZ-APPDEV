import { Component, OnInit } from '@angular/core';
import { User } from '../home/home.model';
import { AuthServiceService } from '../auth-service.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  users: User = new User();
  genres: string[] = [
    'Simulation', 
    'Adventure', 
    'Sports', 
    'Puzzle', 
    'Strategy Game', 
    'Action', 
    'Fighting', 
    'Racing', 
    'Survival Game', 
    'Battle Royale', 
    'RPG', 
    'FPS', 
    'Horror', 
    'Card Game', 
    'Massive Multiplayer Online', 
    'Sandbox', 
    'Walkthrough'
  ];
  constructor(private auth: AuthServiceService, private loadController: LoadingController, private router: Router) { }

  ngOnInit() {
  }

  async createUser() {
    if (this.validation()) {
      let loader = await this.loadController.create({
        message: "Please wait..."
      });
      await loader.present();
      if (!this.users.id) {
        this.auth.addUser(this.users);
        this.auth.presentAlert('Sucess', 'Sucessfully Added.')
      }
      this.users = new User();
      await loader.dismiss();
      this.router.navigate(['home']);
    }
  }
  

  validation() {
    if (!this.users.genres) {
      this.auth.presentToast('ENTER GENRES', 3000);
      return false;
    }
    if (!this.users.gamename) {
      this.auth.presentToast('ENTER GAME NAME', 3000);
      return false;
    }
    if (!this.users.publisher) {
      this.auth.presentToast('ENTER PUBLSHER', 3000);
      return false;
    }
    if (!this.users.released) {
      this.auth.presentToast('ENTER RELEASED', 3000);
      return false;
    }
    if (!this.users.isCompleted) {
      this.auth.presentToast('ENTER COMPLETED', 3000);
      return false;
    }
    if (!this.users.ratings) {
      this.auth.presentToast('ENTER RATINGS', 3000);
      return false;
    }
    return true;
  }
}

