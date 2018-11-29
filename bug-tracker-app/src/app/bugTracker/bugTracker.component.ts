import { Component } from '@angular/core';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs = [];

	onAddNewClick(newBugName : string){
		let newBug = {
			name : newBugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugClick(bugToToggle){
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}

}