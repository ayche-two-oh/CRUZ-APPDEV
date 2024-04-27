import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isUpdated = false;
  constructor(private sWUpdate: SwUpdate) {
  }
  async ngOnInit(){
    await this.sWUpdate.versionUpdates.subscribe(() => {
      this.sWUpdate.checkForUpdate().then(newVersion => {
        if (newVersion && !this.isUpdated && confirm('A new version is availabe. Do you want to load it?')){
          this.isUpdated = true;
          window.location.reload();
        }
      })
    })
  }
}
