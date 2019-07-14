import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProfilePicComponent } from './add-profile-pic/add-profile-pic.component';
import { IonicModule } from '@ionic/angular';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { FormsModule } from '@angular/forms';
import { TripPhotosComponent } from './trip-photos/trip-photos.component';
import { CaravanDropComponent } from './caravan-drop/caravan-drop.component';
import { VehicleDropComponent } from './vehicle-drop/vehicle-drop.component';

@NgModule({
  declarations: [
    AddProfilePicComponent, 
    TripDetailsComponent, 
    TripPhotosComponent, 
    CaravanDropComponent,
    VehicleDropComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  providers: [],
  exports: [
    AddProfilePicComponent, 
    TripDetailsComponent, 
    TripPhotosComponent, 
    CaravanDropComponent,
    VehicleDropComponent
  ]
})
export class SharedModule { }
