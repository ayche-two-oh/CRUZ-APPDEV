import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AlertController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, documentId, getDocs, getFirestore, updateDoc } from 'firebase/firestore';
import { User, iUser } from './home/home.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  newUserList: iUser[] = [];
  users: User = new User();
  isLoading: boolean = false;
  canProceed = false;

  constructor(private AlertController: AlertController, private router: Router, private toastController: ToastController, ) { }
 

  setAuthentication(auth: boolean) {
    if (auth == true) {
      localStorage.setItem("loggedIn", "true");
    } else (
      localStorage.setItem("loggedIn", "false")
    )
  }
  
  canActivate(){
    if (localStorage.getItem("loggedIn") == "true"){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
 
  async presentAlert(header: string, message: string) {
    const alert = await this.AlertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(message: string, duration: number){
    const toast = await this.toastController.create({
      message: message,
      duration: duration
    });
    toast.present();
  }
  

  async login(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      this.setAuthentication(true);
      this.presentAlert('Success', 'Welcome '+user.displayName );
      this.router.navigate(['home']);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(error);
      this.presentAlert('Error', 'Invalid Password' );
    });
   }

   async signUp(email: string, password: string, retypePassword: string){

    if (!email || !password || !retypePassword){
      this.presentAlert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== retypePassword) {
      this.presentAlert('Error', 'Passwords do not match.');
      return;
    } 
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      const user = userCredential.user;
      this.presentAlert('Success', 'Sign Up Successful!');
      this.router.navigate(['login']);
     })

     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(error);
     });
  }

  async getUsers(): Promise<iUser[]> {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    const users: User[] = [];

    const querySnapshot = await getDocs(collection(firestore, 'users'));
    querySnapshot.forEach((doc) => {
      const user = doc.data() as User;
      user.id = doc.id;
      users.push(user);
    });
    return users
  }

  async addUser(user: User) {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const docID = await addDoc(collection(firestore, "users"), {
        gamename: user.gamename,
        publisher: user.publisher,
        ratings: user.ratings,
        isCompleted: user.isCompleted,
        genres: user.genres,
        released: user.released
      });
      console.log("Document with ID: ", docID.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async deleteUser(user: User) {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const docRef = doc(firestore, "users", user.id)
      await deleteDoc(docRef);
    } catch (e) {
      console.error("Delete error: ", e);
    }
  }

  async updateUser(user: User) {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const docRef = doc(firestore, "users", user.id);
      await updateDoc(docRef, {genres: user.genres, gamename: user.gamename, publisher: user.publisher, ratings: user.ratings, isCompleted: user.isCompleted, released: user.released});
    } catch(e) {
      console.error("Error update document: ", e);
    }
  }

  edit(user: iUser) {
    this.users = user;
  }
}
  


