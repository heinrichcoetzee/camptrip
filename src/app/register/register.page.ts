import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IRegistrationUser } from '../shared/IRegistrationUser.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController, LoadingController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { AngularFireStorage } from '@angular/fire/storage';
import { first } from 'rxjs/operators';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  model:IRegistrationUser;
  errorMessage:string = "";
  registerLoading:boolean = false;
  constructor(
    private router:Router,
    private _fireAuth:AngularFireAuth,
    private _firestore:AngularFirestore,
    private _firestorage:AngularFireStorage,
    private toast:ToastController,
    private loader:LoadingController
    ) {
    this.model = {
      name:"",
      surname:"",
      email:"",
      password:""
    }
  }
  @ViewChild('emailInput') emailInput:Form;

  ngOnInit() {
  }
  

  back(){
    this.router.navigate(['login']);
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  async showLoader(message:string){
    return this.loader.create({
      message:message
    });
  }

  async registerUser(){
    if(this.validateDetails()){
    let loader = await this.loader.create({
      message:"Registering User"
    });
    loader.present();

        this._fireAuth.auth
          .createUserWithEmailAndPassword(this.model.email.toLowerCase(),this.model.password)
          .then(async (newUser)=>{
            this.model.uid = newUser.user.uid;
           
            if(typeof this.model.profilePicture != 'undefined'){
              loader.dismiss();
              loader = await this.loader.create({
                message:"Uploading Picture"
              });
              loader.present();
               await this.uploadPicture(newUser.user.uid);
            }
            await newUser.user.sendEmailVerification();
            await newUser.user.updateProfile({
              displayName:this.model.name + " " + this.model.surname,
              photoURL:this.model.profilePicture
            });
            loader.dismiss();
            loader = await this.loader.create({
              message:"Completing Registration"
            });
            loader.present();
            delete this.model.password;
            this._firestore.collection('users').add(this.model).then(async(result)=>{
              this.presentToast("You will receive an email shortly to verify your account")
                .then(()=>{
                  this.back();
                  loader.dismiss();
                }); 
            }).then((error)=>{
              this.handleError(error);
              loader.dismiss();
            })
          })
          .catch((error)=>{
              this.handleError(error);
              loader.dismiss();
          });
      }
  }

  clearError(){
    this.errorMessage = "";
  } 

  validateDetails() {
    if (this.model.name.trim() == "") {
      this.errorMessage = "Please enter your name";
      return false;
    }
    if (this.model.surname.trim() == "") {
      this.errorMessage = "Please enter your surname";
      return false;
    }

    if (this.model.email.trim() == "") {
      this.errorMessage = "Please enter your email address";
      return false;
    }
    const emailRegex = (/^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/).test(this.model.email);
    if(!emailRegex){
      this.errorMessage = "Invalid email address entered"
      return false;
    }

    if (this.model.password.trim() == "") {
      this.errorMessage = "Please enter your password";
      return false;
    }  

    if (this.model.password.length<6) {
      this.errorMessage = "Password should contain at least 6 characters";
      return false;
    }

    return true;
  }

  async uploadPicture(uid:string){
    const path = 'user_pictures/' + uid;
    await this._firestorage.ref(path).putString(this.model.profilePicture.substring(23),'base64');
    await this._firestorage.ref(path).getDownloadURL().pipe(first()).toPromise().then((url)=>{
        this.model.profilePicture = url;
    })
  }

  handleError(error){
    console.log("Could not create user",error);
    this.errorMessage = error.message;
  }

  toLowerEmail(){
    this.model.email = this.model.email.toLowerCase();
  }

}
