import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TickerServiceProvider } from '../../providers/ticker-service/ticker-service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',

})
export class HomePage {
    
    counter: any;

    constructor(public navCtrl: NavController, public tickerService: TickerServiceProvider) {
        this.counter = setInterval(this.load.bind(this), 800);
    }

    load() {
        this.tickerService.getEth()
        this.tickerService.getBtc()
        this.tickerService.getXrp()
        this.tickerService.getLtc()
        this.tickerService.getEtc()
        this.tickerService.getBch()
    }

}
