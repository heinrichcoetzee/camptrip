import { Component, OnInit } from '@angular/core';
import { ITrip } from 'src/app/shared/ITrips.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {
  dummyData:Array<ITrip>;
  constructor(private router:Router) {
    this.dummyData = [
      {
        name:"Namib Toer",
        location:"Walvis Bay",
        description:"Trip to Namibia",
        fromDate:new Date(),
        toDate:new Date(),
        duration:5,
        caravanUsed:"Jurgens",
        vehicleUsed:"Amarok",
        kilometersTraveled:500,
      },
      {
        name:"Namib Toer",
        location:"Walvis Bay",
        description:"Trip to Namibia",
        fromDate:new Date(),
        toDate:new Date(),
        duration:5,
        caravanUsed:"Jurgens",
        vehicleUsed:"Amarok",
        kilometersTraveled:500,
      },{
        name:"Namib Toer",
        location:"Walvis Bay",
        description:"Trip to Namibia",
        fromDate:new Date(),
        toDate:new Date(),
        duration:5,
        caravanUsed:"Jurgens",
        vehicleUsed:"Amarok",
        kilometersTraveled:500,
      },
      {
        name:"Namib Toer",
        location:"Walvis Bay",
        description:"Trip to Namibia",
        fromDate:new Date(),
        toDate:new Date(),
        duration:5,
        caravanUsed:"Jurgens",
        vehicleUsed:"Amarok",
        kilometersTraveled:500,
      },
      {
        name:"Namib Toer",
        location:"Walvis Bay",
        description:"Trip to Namibia",
        fromDate:new Date(),
        toDate:new Date(),
        duration:5,
        caravanUsed:"Jurgens",
        vehicleUsed:"Amarok",
        kilometersTraveled:500,
      }
    ]
  }

  ngOnInit() {
  }

  editItem(trip:ITrip){
    this.router.navigate(['edit-trip']);
  }

}
