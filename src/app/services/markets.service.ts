import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { Markets } from '../models/markets';

@Injectable()
export class MarketsService {

  private marketsUrl = 'https://api.coinmarketcap.com/v1/ticker/';  // URL to web api

  constructor(private http: HttpClient) { }

  getMarkets(): Observable<Markets[]> {
    return this.http.get<Markets[]>(this.marketsUrl)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
