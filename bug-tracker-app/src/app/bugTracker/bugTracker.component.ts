import { Component } from '@angular/core';
import { BugOperationsService } from './services/bugOperations.service';
import { Bug } from './models/Bug';

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
	onAddNewClick(newBugName : string){
		const newBug = this.bugOperations.createNew(newBugName);
		this.bugs.push(newBug);
	}

	onBugClick(bugToToggle : Bug){
		this.bugOperations.toggle(bugToToggle)
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}

}