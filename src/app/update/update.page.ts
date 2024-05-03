import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../home/home.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  users: User = new User();
  id: any;

  genres: string [] = [
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

  constructor(private route: ActivatedRoute, private auth: AuthServiceService, private loadController: LoadingController, private router: Router){ 

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.synchUpdate(this.auth.newUserList);
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

  synchUpdate(users: iUser[]) {
    users.forEach(user => {
      if (this.id == user.id) {
        this.users.id = user.id;
        this.users.genres = user.genres;
        this.users.gamename = user.gamename;
        this.users.publisher = user.publisher;
        this.users.ratings = user.ratings;
        this.users.released = user.released;
        this.users.isCompleted = user.isCompleted;
        
      }
    });
  }


  async updateUser() {
    if (this.validation()) {
      let loader = await this.loadController.create({
        message: "Updating..."
      });
      await loader.present();
      if (this.users.id) {
        this.auth.updateUser(this.users);
        this.auth.presentAlert('Success', 'Sucessfully Updated.')
      }
      this.users = new User();
      await loader.dismiss();
      this.router.navigate(['home']);
    }
  }
}



