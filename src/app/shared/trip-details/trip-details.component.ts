import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ITrip } from '../ITrips.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss'],
})
export class TripDetailsComponent implements OnInit {
  @Input() trip:ITrip;
  @Output() details:EventEmitter<NgForm> = new EventEmitter();
  dateOptions:any;
  @ViewChild('detailForm') detailForm:NgForm;
  constructor() { }

  ngOnInit() {
    this.detailForm.valueChanges.subscribe(()=>{
        this.details.emit(this.detailForm);
    });
    this.dateOptions = {
      fromDateMin:'1970',
      fromDateMax:new Date().getFullYear(),
      toDateMin:'1970',
      toDateMax:new Date().getFullYear()
    };
  }
  
  ionViewDidLeave(){
  
  }

  parseDate(date:Date | string){
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    const day = new Date(date).getDate();
    return new Date(year,month,day,0,0,0,0);
  }

  dateToString(date:Date){
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    return year.toString() + '-' + (month<10?'0':'') + (date.getMonth()+1).toString() + '-' +  (day<10?'0':'') + day.toString();
  }

 toDateChange(){
    const diff = this.parseDate(this.trip.toDate).getTime() - this.parseDate(this.trip.fromDate).getTime();
    const oneDay = 1000*60*60*24;
    this.trip.duration = Math.round((diff / oneDay))+1;
 }

 fromDateChange(){
  this.dateOptions.toDateMax = new Date().getFullYear();
  this.dateOptions.toDateMin = this.dateToString(new Date(this.trip.fromDate));

 }



}
