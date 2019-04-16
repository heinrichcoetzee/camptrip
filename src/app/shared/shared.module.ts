import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProfilePicComponent } from './add-profile-pic/add-profile-pic.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AddProfilePicComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[AddProfilePicComponent]
})
export class SharedModule { }
