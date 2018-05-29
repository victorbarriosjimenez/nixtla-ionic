import { Component, Input , OnInit} from '@angular/core';
import { Branch } from '../../models/branch';
import { BranchesService } from '../../services/branch.service';
import { Observable } from 'rxjs/Observable'
import { NavController } from 'ionic-angular';
import { MapDetailsPage } from '../../pages/map-details/map-details';
import { Event } from '../../models/events';
import { WorkdayPage } from '../../pages/workday/workday';
import * as moment from 'moment';
import { EventsService } from '../../services/events.service';
@Component({
  selector: 'branch-details',
  templateUrl: 'branch-details.html'
})
export class BranchDetailsComponent implements OnInit {
  @Input('branch-data') public branchId: string;
  @Input('event-data') public event: Event;
  public hasOpenedWorkday: boolean = false;
  public branch: Branch;
  public workDay: any;
  public today = moment().startOf('day').toDate();
  ngOnInit(){
    this.getBranchData();
    this.getWorkdayEvent(); 
  }
  constructor(private branchService: BranchesService,
              public navCtrl: NavController,
              private eventsService: EventsService) { }
  public getBranchData(){
    this.branchService.getBranchByUid(this.branchId)
        .subscribe(branch => this.branch = branch);
  }
  public goToMapBranchLocation(){
     this.navCtrl.push(MapDetailsPage,
      {
      coordinates: {
        lat: this.branch.coordinatesLat,
        lng: this.branch.coordinatesLng
      }
    }); 
  }
  public navigateToWorkday() {
    let today = new Date() >= this.event.eventDateBegin && new Date() <= this.event.eventDateExp && this.event.status == true ? new Date() : this.showWorkdayErr();
    let todayStartHour = moment().startOf('day').toDate()
    let todayEndHour = moment().endOf('day').toDate();  
    if(today >= todayStartHour && todayEndHour >= today) {
        this.navCtrl.push(WorkdayPage,
          {
            promoter: this.event.promoter,
            coordinates: {
              lat: this.branch.coordinatesLat,
              lng: this.branch.coordinatesLng
            }
          } 
        );
    }
  }
  showWorkdayErr(){
    console.log("Reportado papu");
  }
  public getWorkdayEvent() {
    this.eventsService.searchWorkdayData(this.event.promoter,this.event.uid,this.today)
        .subscribe(workd => this.workDay = this.workDay,
        err => console.log(err),
        () => console.log("peeeeerroo"));
  }
}
