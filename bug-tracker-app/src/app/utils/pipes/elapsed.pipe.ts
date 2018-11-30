import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
	name: 'elapsed',
	pure : true
})
export class ElapsedPipe implements PipeTransform {
	transform(value: any, args: any[]): any {
		console.log('elapsed.transform triggered');
		return moment(value).fromNow();
	}
}