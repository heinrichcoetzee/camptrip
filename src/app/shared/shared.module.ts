import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProfilePicComponent } from './add-profile-pic/add-profile-pic.component';
import { IonicModule } from '@ionic/angular';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddProfilePicComponent,TripDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[AddProfilePicComponent,TripDetailsComponent]
})
export class SharedModule { }
