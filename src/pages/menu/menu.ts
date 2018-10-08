import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
export class MenuPage {
	dishes: Dish[];

  constructor(
  	public navCtrl: NavController, public navParams: NavParams
 	this.getFeaturedDishes();
 	) {

  	 ngOnInit(){
    this.getDishes();
  }
  getDishes(){
    this.dishService
    .getFeaturedDishes()
    .subscribe(
      response => {
        this.dish=response[0];
        console.log(this.dish);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
