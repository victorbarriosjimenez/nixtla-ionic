import { Component, Input , OnInit} from '@angular/core';
import { Branch } from '../../models/branch';
import { BranchesService } from '../../services/branch.service';
import { Observable } from 'rxjs/Observable'
import { NavController } from 'ionic-angular';
import { MapDetailsPage } from '../../pages/map-details/map-details';
@Component({
  selector: 'branch-details',
  templateUrl: 'branch-details.html'
})
export class BranchDetailsComponent implements OnInit {
  @Input('branch-data') branchId: string;
  public branch: Branch;
  ngOnInit(){
    this.getBranchData(); 
  }
  constructor(private branchService: BranchesService,
              public navCtrl: NavController) { }
  public getBranchData(){
    this.branchService.getBranchByUid(this.branchId)
        .subscribe(branch => this.branch = branch);
  }
  goToMapBranchLocation(){
     this.navCtrl.push(MapDetailsPage,
      {
      coordinates: {
        lat: this.branch.coordinatesLat,
        lng: this.branch.coordinatesLng
      }
    });
  }
}
