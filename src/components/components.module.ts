import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BranchDetailsComponent } from './branch-details/branch-details';
import { BranchesService } from '../services/branch.service';
import { IonicModule } from 'ionic-angular';
import { WordkdayButtonComponent } from './wordkday-button/wordkday-button.component';

@NgModule({
	declarations: [
		BranchDetailsComponent,
		WordkdayButtonComponent
],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [
		BranchDetailsComponent,
		WordkdayButtonComponent
	],
	providers: [
		BranchesService		
	]
})
export class ComponentsModule {}
