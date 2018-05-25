import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { MapDetailsPage } from './map-details';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MapDetailsPage,
  ],
  entryComponents: [
    MapDetailsPage
  ],
  imports: [
    IonicModule,
    AgmCoreModule
  ],
})
export class MapDetailsPageModule {}