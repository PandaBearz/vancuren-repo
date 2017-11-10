import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActionSheetController, IonicPage, NavController, NavParams, ModalController,  } from 'ionic-angular';
import { AngularFireObject, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {

  transRef: AngularFireList<any>;
  trans: Observable<any[]>;
  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;

  constructor(
    db: AngularFireDatabase,
    public navCtrl: NavController,
    public dataService: DataProvider,
    public navParams: NavParams,
  ) {
    this.searchControl = new FormControl();
    this.transRef = db.list('transactions');
    this.trans = this.transRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  addTrans(transDate, market, coin, amount, price, type) {
    this.transRef.push({
      date: transDate,
      market: market,
      coin: coin,
      amount: amount,
      price: price,
      type: type
    });
  }

  ionViewDidLoad() {

    this.setFilteredItems();

    console.log('ionViewDidLoad TransactionPage');

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();

    });
  }

  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems() {

    this.items = this.dataService.filterItems(this.searchTerm);

  }

}
