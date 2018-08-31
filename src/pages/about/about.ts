import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({
  name:'abaut-page',
  segment:'custom-about/:id',
  defaultHistory:['HomePage']

})
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   console.log('Register id: ', this.navParams.get('id'));
  }

}
