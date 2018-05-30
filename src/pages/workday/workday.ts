import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Workday } from '../../models/workday';
import * as moment from 'moment';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/events';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-workday',
  templateUrl: 'workday.html',
})
export class WorkdayPage {
  workday: string = "regular";
  public isUserLocated: boolean = false;
  public hasCheckedStartHour = false;
  public hasCheckedEndHour = false;
  public startHour: any;
  public endHour: any;
  public hasFoundExistentWorkday: boolean; 
  public promoter: string;
  public workDayObject: any;
  public branch: string;
  public today: Date;
  public userLocationLat: number = 0;
  public userLocationLng: number = 0;
  public branchLocation;
  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              public navParams: NavParams,
              public eventsService: EventsService,
              public alertCtrl: AlertController) { }
  ionViewDidLoad() { 
    this.promoter = this.navParams.get('promoter');
    this.branchLocation = this.navParams.get('coordinates');
    this.today = this.navParams.get('today');
    this.branch = this.navParams.get('branch');
    this.getWorkdayEvent();  
    this.getLocation();
  }
  public getLocation(): void {
    this.geolocation.getCurrentPosition().then(
      position => {
          this.isUserLocated = true;
          this.userLocationLat = position.coords.latitude;
          this.userLocationLng = position.coords.longitude;
      },
      err => { 
          console.log("No se pudo localizar este dispositivo.")
      });
  }
  public compareLocationDistanceFromEvent() {
    var R = 6378137; 
    var dLat = this.rad(this.userLocationLat - this.branchLocation.lat)
    var dLong = this.rad(this.userLocationLng - this.branchLocation.lng)
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
         Math.cos(this.rad(this.branchLocation.lat)) * Math.cos(this.rad(this.userLocationLat)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d/1000; 
  }
  private rad(x): number {
    return x * Math.PI / 180;
  }
  public checkStartHour(): void {
    this.getLocation();
    this.compareDistanceLocationFromBranch() ? this.prepareStartHourModel(new Date()) : this.hasCheckedStartHour = false;
  }
  public compareDistanceLocationFromBranch(){
    let distance = this.compareLocationDistanceFromEvent();
    let fixedDistance = distance.toFixed(2);
    if(distance > 0.00 && distance <= .100){
      return true;
    }
    else { 
      let alert = this.alertCtrl.create({
        title: 'Estás muy lejos',
        subTitle: `Te encuentras a una distancia de ${fixedDistance} kilómetros, acércate más a la sucursal`,
        buttons: [{
          text: 'OK',
          handler: data => {
            this.navCtrl.pop();
          }
        }]
      });
      alert.present();
      return false;
    }
  }
  public prepareEndHourModel(endCheckTime: Date): void {
    this.endHour = endCheckTime;
    const endWorkDayModel: Workday = {
      uid: this.workDayObject.uid,      
      hasCheckedEndHour: true,
      endHourCheckTime: endCheckTime
    }
    this.eventsService.completeWorkDayFromEndHour(endWorkDayModel)
        .then(succ => console.log(succ));
  }
  public checkEndHour() {
    this.getLocation();
    this.compareDistanceLocationFromBranch() ? this.prepareEndHourModel(new Date()) : this.hasCheckedEndHour = false;
  }
  public prepareStartHourModel(startCheckTime: Date) {
    this.startHour = startCheckTime
    const startWorkDayModel: Workday = {
        workDayDate:   moment().startOf('day').toDate(),
        promoter: this.promoter,
        hasCheckedStartHour: true,
        startCheckTime: startCheckTime 
    }
    this.eventsService.setNewWorkdayFromStartHour(startWorkDayModel)
        .then((succ)=>  { console.log(succ); });
  }
  public getWorkdayEvent() {
    this.eventsService.searchWorkdayData(this.promoter,this.today)
        .subscribe(workdayEvent =>{
          if(workdayEvent) { 
            this.workDayObject = workdayEvent[0],
            this.hasCheckedStartHour = this.workDayObject.hasCheckedStartHour,
            this.startHour = this.workDayObject.startCheckTime
          }
        });
  }
}
