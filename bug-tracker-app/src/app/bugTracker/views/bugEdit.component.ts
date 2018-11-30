import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugApiService } from '../services/bugApi.service';

@Component({
	selector : 'app-bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" (keyup)="newBugName = $event.target.value">
			<span> [ {{newBugName.length}} ] </span>
			<input type="button" value="Add New" (click)="onAddNewClick()">
		</section>
	`,
	changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugEditComponent{
	newBugName : string = '';

	@Output()
	bugCreated : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugApi : BugApiService){

	}
	onAddNewClick(){
		this.bugApi
			.addNew(this.newBugName)
			.subscribe(newBug => this.bugCreated.emit(newBug));
		;
	}
}