import { Component, Input , OnInit} from '@angular/core';
import { Branch } from '../../models/branch';
import { BranchesService } from '../../services/branch.service';
import { Observable } from 'rxjs/Observable'
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
  constructor(private branchService: BranchesService) { }
  public getBranchData(){
    this.branchService.getBranchByUid(this.branchId)
        .subscribe(branch => this.branch = branch);
  }
}
