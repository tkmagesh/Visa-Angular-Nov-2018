import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugApiService } from '../services/bugApi.service';

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

	constructor(private bugApi : BugApiService){

	}
	onBugClick(bugToToggle : Bug){
		this.bugApi
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.toggled.emit(toggledBug));
		

	}
}