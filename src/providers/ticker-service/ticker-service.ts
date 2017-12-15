import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular/platform/platform';
// import * as Io from 'socket.io-client';

/*
  Generated class for the TickerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TickerServiceProvider {

  private apiUrl = "/api/market";

  constructor(public http: Http, private platform: Platform) {
    if (this.platform.is('cordova')) { // change url if deploying
      this.apiUrl = "https://api.btcmarkets.net/market";
    }
  }

  getEth() {
    let url = this.apiUrl + "/ETH/AUD/tick";

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getBtc() {
    let url = this.apiUrl + "/BTC/AUD/tick";

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  getXrp() {
    let url = this.apiUrl + "/XRP/AUD/tick";

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  getLtc() {
    let url = this.apiUrl + "/LTC/AUD/tick";

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  getEtc() {
    let url = this.apiUrl + "/ETC/AUD/tick";

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getBch() {
    let url = this.apiUrl + "/BCH/AUD/tick";

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}
