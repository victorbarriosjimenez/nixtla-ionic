import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BranchDetailsComponent } from './branch-details/branch-details';
import { BranchesService } from '../services/branch.service';
import { IonicModule } from 'ionic-angular';
import { EventsService } from '../services/events.service';

@NgModule({
	declarations: [
		BranchDetailsComponent
],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [
		BranchDetailsComponent
	],
	providers: [
		BranchesService,
		EventsService
	]
})
export class ComponentsModule {}
