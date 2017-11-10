import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 

import { MarketsService } from '../../app/services/markets.service';

import { Markets } from '../../app/models/markets';

import { FilterPipe } from '../../app/pipes/filter';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  marketForm: FormGroup;
  coins: Markets[];
  id = '';

  constructor(
    public navCtrl: NavController,
    private marketsService: MarketsService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.marketsService
      .getMarkets()
      .subscribe(coins => this.coins = coins);
    this.createForm();
  }

  createForm() {
    this.marketForm = this.fb.group({
      id: '',
      limitAmount: '',
    });
  }

  }
