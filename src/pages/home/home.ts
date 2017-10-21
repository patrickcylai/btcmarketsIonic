import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TickerServiceProvider } from '../../providers/ticker-service/ticker-service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',

})
export class HomePage {

    ethTick: any;
    btcTick: any;
    xrpTick: any;
    ltcTick: any;
    etcTick: any;
    bchTick: any;
    counter: any;

    constructor(public navCtrl: NavController, public tickerService: TickerServiceProvider) {
        this.ethTick = 0;
        this.btcTick = 0;
        this.xrpTick = 0;
        this.ltcTick = 0;
        this.counter = setInterval(this.load.bind(this), 1000);
    }

    load() {
        this.tickerService.load('AUD', 'ETH')
            .then(data => {
                this.ethTick = data;
            })
        this.tickerService.load('AUD', 'BTC')
            .then(data => {
                this.btcTick = data;
            })
        this.tickerService.load('AUD', 'XRP')
            .then(data => {
                this.xrpTick = data;
            })
        this.tickerService.load('AUD', 'LTC')
            .then(data => {
                this.ltcTick = data;
            })
        this.tickerService.load('AUD', 'ETC')
            .then(data => {
                this.etcTick = data;
            })
        this.tickerService.load('AUD', 'BCH')
            .then(data => {
                this.bchTick = data;
            })
    }

}
