import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TickerServiceProvider } from '../../providers/ticker-service/ticker-service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',

})
export class HomePage {
    
    // Counter loop
    counter: any;

    // Ticker Data
    ethData: any;
    btcData: any;
    xrpData: any;
    ltcData: any;
    etcData: any;
    bchData: any;
    
    constructor(public navCtrl: NavController, public tickerService: TickerServiceProvider) {
        this.counter = setInterval(this.load.bind(this), 1500); // set loop timing
    }
    
    load() {
        this.getEth()
        this.getBtc()
        this.getXrp()
        this.getLtc()
        this.getEtc()
        this.getBch()
    }

    getEth() {
        this.tickerService.getEth()
            .then(data => {
                this.ethData = data;
            });
    }

    getBtc() {
        this.tickerService.getBtc()
            .then(data => {
                this.btcData = data;
            });
    }

    getXrp() {
        this.tickerService.getXrp()
            .then(data => {
                this.xrpData = data;
            });
    }

    getLtc() {
        this.tickerService.getLtc()
            .then(data => {
                this.ltcData = data;
            });
    }

    getEtc() {
        this.tickerService.getEtc()
            .then(data => {
                this.etcData = data;
            });
    }

    getBch() {
        this.tickerService.getBch()
            .then(data => {
                this.bchData = data;
            });
    }
}
