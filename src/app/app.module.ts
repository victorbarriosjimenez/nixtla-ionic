import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AuthService } from '../services/auth.service';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { BranchesService } from '../services/branch.service';
import { BranchDetailsComponent } from '../components/branch-details/branch-details';
import { ComponentsModule } from '../components/components.module';
import { Geolocation } from '@ionic-native/geolocation';
import { MapDetailsPage } from '../pages/map-details/map-details';
import { MapDetailsPageModule } from '../pages/map-details/map-details.module';

import { AgmCoreModule } from '@agm/core';
import { WorkdayPageModule } from '../pages/workday/workday.module';
import { WorkdayPage } from '../pages/workday/workday';


const firebaseConfig = {
  apiKey: "AIzaSyC3aXDPdYwKnONsrSgomSwJMr_J6XYU-DU",
  authDomain: "angular-fb-fd544.firebaseapp.com",
  databaseURL: "https://angular-fb-fd544.firebaseio.com",
  projectId: "angular-fb-fd544",
  storageBucket: "angular-fb-fd544.appspot.com",
  messagingSenderId: "281618586800"
}
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    WorkdayPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxErrorsModule,
    ComponentsModule,    
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0gcAwwnMoOl-2HuX00wKb-uXAoUoE8qU'
    }),
    MapDetailsPageModule   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    WorkdayPage    
  ],
  providers: [
    StatusBar,
    AngularFireAuth,
    AuthService,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
