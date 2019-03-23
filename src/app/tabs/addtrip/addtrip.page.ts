import { Component, OnInit } from '@angular/core';
import { ITrip } from 'src/app/shared/ITrips.interface';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.page.html',
  styleUrls: ['./addtrip.page.scss'],
})
export class AddtripPage implements OnInit {
  trip:ITrip;
  constructor() {
    this.trip = {
      fromDate:new Date(),
      toDate:new Date(),
    }
  }

  ngOnInit() {
  }

  addTrip(){
    console.log("Trip",this.trip);
  }

}
