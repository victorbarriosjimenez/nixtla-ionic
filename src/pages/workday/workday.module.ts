import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkdayPage } from './workday';

@NgModule({
  declarations: [
    WorkdayPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkdayPage),
  ],
})
export class WorkdayPageModule {}
