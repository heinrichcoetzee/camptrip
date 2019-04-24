import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ITrip } from 'src/app/shared/ITrips.interface';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.page.html',
  styleUrls: ['./edit-trip.page.scss'],
})
export class EditTripPage implements OnInit {
  trip:ITrip;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
        this.initTrip();
  }
  initTrip(){
    this.trip = {};
    this.trip = {
      uid:"",
      fromDate:new Date(),
      toDate:new Date(),
      memories:[],
      photos:[]
    };
  }

  ionViewWillEnter(){
    this.trip = this.activatedRoute.snapshot.params;
    console.log("trip key",this.trip);

  }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['main/tabs/trips']);
  }

}
