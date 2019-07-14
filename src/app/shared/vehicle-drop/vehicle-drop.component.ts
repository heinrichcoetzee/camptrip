import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ICaravan } from '../ICaravan.interface';
import { IUser } from '../IUser.interface';
import { IVehicle } from '../IVehicle.interface';

@Component({
  selector: 'app-vehicle-drop',
  templateUrl: './vehicle-drop.component.html',
  styleUrls: ['./vehicle-drop.component.scss'],
})
export class VehicleDropComponent implements OnChanges {

  @Input() profile:IUser;
  @Output() add:EventEmitter<Array<ICaravan>> = new EventEmitter();
  vehicles;
  vehicle:IVehicle = {
    make:'',
    model:''
  };

  constructor(private toast:ToastController) {
    
  }

  ngOnChanges() {
    this.vehicles = this.profile.vehicles?this.profile.vehicles : [];
  }

  async addVehicle(){
    
    if(this.vehicle.make && this.vehicle.model){  
      this.vehicles.push(this.vehicle);
      this.add.emit(this.vehicles);
    }else{
      let toast = await this.toast.create({
        message: "Please select vehicle make and model",
        color:"danger",
        duration: 2000
      });
      toast.present();
    }
  }

}

