import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TestProvider } from '../../providers/test/test';

/**
 * Generated class for the ItemsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
  items: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public test:TestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
    this.test.load().then((items) => {
      
      for(var item in items){
        this.items.push(item);
      }
      console.log(this.items,"items list");
    });

  }

}
