import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DishProvider} from '../providers/dish/dish';

import {Dish} from '../../shared/dish';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

	dish: Dish;

  constructor(
  	public navCtrl: NavController) {
  	private dishService: DishProvider,
  	@Inject('DbURL') private DbURL
  	getFeaturedDish({
  		this.dishService
  		.getFeaturedDish()
  		

  	})
 }

}
}
