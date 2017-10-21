import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import * as Io from 'socket.io-client';

/*
  Generated class for the TickerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TickerServiceProvider {

  private apiUrl: string;
  ethTick: number;
  btcTick: number;
  xrpTick: number;
  ltcTick: number;
  etcTick: number;
  bchTick: number;

  constructor(public http: Http) {
    this.apiUrl = "https://api.btcmarkets.net/market";
  }

  getEth() {
    let url = this.apiUrl + "/ETH/AUD/tick";

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.ethTick = data.lastPrice;
          resolve(this.ethTick);
        });
    });
  }

  getBtc() {
    let url = this.apiUrl + "/BTC/AUD/tick";

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.btcTick = data.lastPrice;
          resolve(this.btcTick);
        });
    });
  }
  getXrp() {
    let url = this.apiUrl + "/XRP/AUD/tick";

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.xrpTick = data.lastPrice;
          resolve(this.xrpTick);
        });
    });
  }
  getLtc() {
    let url = this.apiUrl + "/LTC/AUD/tick";

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.ltcTick = data.lastPrice;
          resolve(this.ltcTick);
        });
    });
  }
  getEtc() {
    let url = this.apiUrl + "/ETC/AUD/tick";

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.etcTick = data.lastPrice;
          resolve(this.etcTick);
        });
    });
  }

  getBch() {
    let url = this.apiUrl + "/BCH/AUD/tick";

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.bchTick = data.lastPrice;
          resolve(this.bchTick);
        });
    });
  }

}
