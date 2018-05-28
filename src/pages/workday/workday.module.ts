import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { WorkdayPage } from './workday';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WorkdayPage
  ],
  entryComponents:[
    WorkdayPage
  ],
  imports: [
    IonicModule,
    FormsModule
  ],
})
export class WorkdayPageModule {}
