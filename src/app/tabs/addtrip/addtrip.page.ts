import { Component, OnInit } from '@angular/core';
import { ITrip, IMemory } from 'src/app/shared/ITrips.interface';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.page.html',
  styleUrls: ['./addtrip.page.scss'],
})
export class AddtripPage implements OnInit {
  trip:ITrip;
  showDetails:boolean;
  constructor() {
    this.trip = {
      fromDate:new Date(),
      toDate:new Date(),
      memories:[]
    };
    this.showDetails = false;
  }

  ngOnInit() {
  }

  addTrip(){
    console.log("Trip",this.trip);
  }

  uploadPhoto(){

  }

  addMemory(memory:IMemory){
    console.log("memory",memory)
    this.trip.memories.push({name:"",description:""});
  }


  removeMemory(index:number){
    console.log("removeMemory",index);
    this.trip.memories.splice(index,1);
  }

}
