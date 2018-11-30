import { Component } from '@angular/core';
import { BugOperationsService } from './services/bugOperations.service';
import { Bug } from './models/Bug';

import * as moment from 'moment';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs = [];

	sortBugBy : string = 'name';
	sortBugDesc :  boolean = false;

	

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push(this.bugOperations.createNew('Server communicaiton failure'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognized'));
		this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'));
		this.bugs.push(this.bugOperations.createNew('Application not responding'));
	}
	
	onBugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugToggle(toggledBug : Bug){
		//console.log(toggledBug);
		this.bugs = this.bugs.map(bug => bug.name === toggledBug.name ? toggledBug : bug);
		//this.bugs = [...this.bugs];
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}


}