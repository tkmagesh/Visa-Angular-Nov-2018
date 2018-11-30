import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Bug } from '../models/Bug';

@Component({
	selector : 'app-bug-display',
	template : `
		<span class="bugname" 
				[ngClass]="{closed : bug.isClosed}"
			>
				{{bug.name | trimText:40}}
			</span>
	`,
	changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugDisplayComponent{
	@Input('data')
	bug : Bug ;
}