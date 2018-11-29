import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  constructor(){
  	/*let counter = 0;
  	setInterval(() => {
  		this.title = 'My New App - ' + ++counter;
  	},5000);*/
  }

  onChangeTitleClick(newTitle : string){
  	this.title = newTitle;
  }
}
