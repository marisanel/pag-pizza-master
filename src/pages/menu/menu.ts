import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DishProvider} from "../../providers/dish/dish";
import { Dish } from "../../shared/dish";
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit{
	dishes: Dish[];

  constructor(
  	public navCtrl: NavController, public navParams: NavParams, public dishService: DishProvider,
 	) {
       }

   ngOnInit(){
    this.getDishes();
      }

  getDishes(){
    this.dishService
    .getDishes()
    .subscribe(
      response => {
        this.dishes=response;
        console.log(this.dishes);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
