import { Bug } from '../models/Bug';

export class BugOperationsService{
	createNew(bugName : string) : Bug {
		const newBug = {
				name : bugName,
				isClosed : false
			};
		return newBug;
	}
	toggle(bugToToggle : Bug) : void {
		/*const toggledBug = { ...bugToToggle, isClosed : false};
		return toggledBug;*/
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}
}