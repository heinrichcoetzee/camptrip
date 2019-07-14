import { Component, OnInit } from '@angular/core';
import { ITrip } from 'src/app/shared/ITrips.interface';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { takeUntil } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {
  trips$:Observable<any>;
  destroy$:Subject<void> = new Subject();
  loadingImage:any;
  constructor(
    private globalService:GlobalService,
    private firestore:AngularFirestore,
    private fireAuth:AngularFireAuth,
    private router:Router
    ) {
   
  }

  ionViewWillEnter(){
    this.loadingImage = {
      0:true,
      1:true,
      2:true,
      3:true,
      4:true,
      5:true
    };
    this.fireAuth.authState.pipe(takeUntil(this.destroy$)).subscribe((user)=>{
      const uid = user.uid;
      this.trips$ = this.firestore.collection('trips',(ref)=>ref.where('uid','==',uid)).valueChanges();
    });

  }

  ionViewDidLeave(){
    this.trips$ = undefined;
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
  
  }


  editItem(trip:ITrip){
    this.globalService.editTrip = trip;
    this.router.navigate(['edit-trip']);
  }

}
