import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BranchDetailsComponent } from './branch-details/branch-details';
import { BranchesService } from '../services/branch.service';
@NgModule({
	declarations: [BranchDetailsComponent],
	imports: [
		CommonModule
	],
	exports: [
		BranchDetailsComponent
	],
	providers: [
		BranchesService		
	]
})
export class ComponentsModule {}
