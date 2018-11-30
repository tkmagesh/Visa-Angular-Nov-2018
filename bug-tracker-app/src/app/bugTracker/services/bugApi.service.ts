import { HttpClient } from '@angular/common/http';
import { Bug } from '../models/Bug';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugApiService{
	endpoint = 'http://localhost:3000/bugs';

	constructor(private http : HttpClient,
		private bugOperations : BugOperationsService){

	}

	getAll() : Observable<Bug[]> {
		return this.http
			.get<Bug[]>(this.endpoint)
	}

	addNew(bugName : string) : Observable<Bug>{
		let newBug = this.bugOperations.createNew(bugName);
		return this.http
			.post<Bug>(this.endpoint, newBug);

	}

	toggle(bugToToggle : Bug) : Observable<Bug>{
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return this.http
			.put<Bug>(`${this.endpoint}/${toggledBug.id}`, toggledBug);		
	}

	remove(bug : Bug) : Observable<any>{
		return this.http
			.delete<Bug>(`${this.endpoint}/${bug.id}`);			
	}
}