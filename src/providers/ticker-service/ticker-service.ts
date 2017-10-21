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
  public tick: number;

  constructor(public http: Http) {
    this.apiUrl = "https://api.btcmarkets.net/market";
  }

  load(currency: string, instrument: string) {
      let url = this.apiUrl + "/" + instrument + "/" + currency + "/tick";

      return new Promise(resolve => {
          this.http.get(url)
              .map(res => res.json())
              .subscribe(data => {
                  this.tick = data.lastPrice;
                  resolve(this.tick);
              });
      });
  }

}
