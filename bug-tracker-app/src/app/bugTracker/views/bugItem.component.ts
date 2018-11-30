import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugOperationsService } from '../services/bugOperations.service';

@Component({
	selector : 'app-bug-item',
	template : `
		<li>
			<app-bug-display [data]="bug"></app-bug-display>
			<input type="button" value="Toggle" (click)="onBugClick(bug)"/>
			<div class="datetime">{{bug.createdAt | elapsed}}</div>
		</li>
	`
	//changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugItemComponent{
	@Input('data')
	bug : Bug;

	@Output()
	toggled : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugOperations : BugOperationsService){

	}
	onBugClick(bugToToggle : Bug){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.toggled.emit(toggledBug);

	}
}