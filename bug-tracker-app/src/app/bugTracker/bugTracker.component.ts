import { Component, OnInit } from '@angular/core';
import { BugOperationsService } from './services/bugOperations.service';
import { Bug } from './models/Bug';
import { BugApiService } from './services/bugApi.service';

import * as moment from 'moment';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs = [];

	sortBugBy : string = 'name';
	sortBugDesc :  boolean = false;

	constructor(private bugOperations : BugOperationsService,
		private bugApi : BugApiService){
		
	}
	
	ngOnInit(){
		this.bugApi
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}
	onBugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugToggle(toggledBug : Bug){
		this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this
			.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => {
				this.bugApi
					.remove(closedBug)
					.subscribe(_ => this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id));
			});
	}


}