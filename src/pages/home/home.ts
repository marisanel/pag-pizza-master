import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DishProvider} from '../providers/dish/dish';

import {Dish} from '../../shared/dish';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController) {

  }

}
