import { Component } from '@angular/core';

@Component({
	selector : 'app-products',
	template : `
		<h3>Products</h3>
		<hr/>
		<label>Product Name</label>
		<input type="text" #txtProductName />
		<input type="button" value="Add To List" (click) = "products.push(txtProductName.value)" />
		<ol>
			<li *ngFor="let product of products">{{product}}</li>
		</ol>
	`,
})
export class ProductsComponent{
	products = [
		'Pen',
		'Pencil',
		'Marker'
	];
}