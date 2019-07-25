import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { IUser } from '../IUser.interface';
import { IVehicle } from '../IVehicle.interface';

@Component({
  selector: 'app-vehicle-drop',
  templateUrl: './vehicle-drop.component.html',
  styleUrls: ['./vehicle-drop.component.scss'],
})
export class VehicleDropComponent implements OnChanges {

  @Input() profile:IUser;
  @Output() update:EventEmitter<Array<IVehicle>> = new EventEmitter();
  vehicles;
  vehicle:IVehicle = {
    make:'',
    model:''
  };
  showAddnew:boolean = false;
  constructor(private toast:ToastController,private alertCtrl:AlertController) {
    
  }

  ngOnChanges() {
    this.vehicles = this.profile.vehicles?this.profile.vehicles : [];
  }

  async addVehicle(){
    
    if(this.vehicle.make && this.vehicle.model){  
      this.vehicles.push(this.vehicle);
      this.update.emit(this.vehicles);
      this.vehicle = {make:"",model:''};
      this.showAddnew = false;
    }else{
      let toast = await this.toast.create({
        message: "Please select vehicle make and model",
        color:"danger",
        duration: 2000
      });
      toast.present();
    }
  }

  editVehicle(vehicle:IVehicle){
    this.vehicles[(parseFloat(vehicle._id)-1)] = vehicle;
    delete vehicle['editing'];
    this.update.emit(this.vehicles)
  }

   async deleteVehicle(vehicle:IVehicle,){

    let alert = await this.alertCtrl.create({
      message: `Are you sure you want to delete ${vehicle.make} ${vehicle.make}?`,
      buttons:[{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.vehicles.splice((parseFloat(vehicle._id)-1),1);
          this.update.emit(this.vehicles);
        }
      }]
    })
    alert.present();
   
  }


}

