import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController, IonicPage, ModalController, NavParams } from 'ionic-angular';
import { AngularFireObject, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { TransactionPage } from '../transaction/transaction';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  transRef: AngularFireList<any>;
  trans: Observable<any[]>;

  constructor(
    db: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
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

  updateItem(key: string, transDate, market, coin, amount, price, type) {
    this.transRef.update(key, {
      date: transDate,
      market: market,
      coin: coin,
      amount: amount,
      price: price,
      type: type
    });
  }

  deleteItem(key: string) {
    this.transRef.remove(key);
  }

  deleteEverything() {
    this.transRef.remove();
  }

  push() {
    this.navCtrl.push(TransactionPage);
  }

}
