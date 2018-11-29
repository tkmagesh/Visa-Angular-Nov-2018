import { Component } from '@angular/core';
import { CalculatorModel } from './calculatorModel';

@Component({
	selector : 'app-calculator',
	templateUrl : 'calculator.component.html',
	styleUrls : ['calculator.component.css']
})
export class CalculatorComponent{
	//model : CalculatorModel;

	constructor(private model : CalculatorModel){
		//this.model = _calculatorModel;
	}
}