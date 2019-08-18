import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITrip } from 'src/app/shared/ITrips.interface';
import { GlobalService } from 'src/app/services/global.service';
import { NgForm } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';
import { DocumentReference, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.page.html',
  styleUrls: ['./edit-trip.page.scss'],
})
export class EditTripPage implements OnInit {
  trip:ITrip = {
    uid:"",
    fromDate:new Date(),
    toDate:new Date(),
    memories:[],
    photos:[]
  };
  detailForm:NgForm;
  constructor(private router:Router,
    private loadingController:LoadingController,
    private globalService:GlobalService,
    private toast:ToastController,private firestore:AngularFirestore,private firestorage:AngularFireStorage) {
        
  }


  ionViewWillEnter(){
    this.trip = this.globalService.editTrip;
    if(typeof this.globalService.editTrip === 'undefined'){
      this.back();
    }
    console.log("trip - ",this.trip);
  }

  ngOnInit() {
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 3000,
      color:'orange'
    });
    toast.present();
  }
  

  async saveTrip(){

    if(typeof this.detailForm=="undefined"){
      this.presentToast('Tap "Add Details" and fill out the details');
      return;
    }
   if(this.detailForm.invalid){
     this.presentToast("Please complete the fields with a *");
     return;
   }
    let loading = await this.loadingController.create({
      message: 'Saving Trip...'
    });
    loading.present();
    await this.uploadPhotos();
    await this.firestore.collection('trips').doc(this.trip.key).update(this.trip);
    loading.dismiss();
    this.router.navigate(['main/tabs/trips']);
  }

  async uploadPhotos(): Promise<any> {
    return new Promise((resolve) => {
      this.trip.photos.map(async (photo, index) => {
        if (!photo.includes('http')) {
          const path = 'photos/' + this.trip.key + '/' + index;
          await this.firestorage.ref(path).putString(photo.substring(23), 'base64');
          this.firestorage.ref(path).getDownloadURL().pipe(first()).subscribe((url) => {
            this.trip.photos.push(url);
            resolve();
          });
        }
      });
    })
  }

  back(){
    this.router.navigate(['main/tabs/trips']);
  }

}
