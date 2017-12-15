import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TickerServiceProvider } from '../../providers/ticker-service/ticker-service';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

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

    tickerData: any;
    tickerTitles: any;
    
    constructor(public navCtrl: NavController, public tickerService: TickerServiceProvider, 
        public admob: AdMobFree) {
        this.tickerData = [];
        this.tickerTitles = [
            'Ethereum',
            'Bitcoin',
            'Ripple',
            'Litecoin',
            'Ethereum Classic',
            'BCash'
        ];
        this.showBanner();
        this.counter = setInterval(this.load.bind(this), 1500); // set loop timing
    }
    
    load() {
        this.getEth()
        this.getBtc()
        this.getXrp()
        this.getLtc()
        this.getEtc()
        this.getBch()
        this.tickerData = [
            this.ethData,
            this.btcData,
            this.xrpData,
            this.ltcData,
            this.etcData,
            this.bchData
        ];
    }

    getEth() {
        this.tickerService.getEth()
            .then(data => {
                if (data['lastPrice'] != undefined) {
                    this.ethData = data;
                }
            });
    }

    getBtc() {
        this.tickerService.getBtc()
            .then(data => {
                if (data['lastPrice'] != undefined) {
                    this.btcData = data;
                }
            });
    }

    getXrp() {
        this.tickerService.getXrp()
            .then(data => {
                if (data['lastPrice'] != undefined) {
                    this.xrpData = data;
                }
            });
    }

    getLtc() {
        this.tickerService.getLtc()
            .then(data => {
                if (data['lastPrice'] != undefined) {
                    this.ltcData = data;
                }
            });
    }

    getEtc() {
        this.tickerService.getEtc()
            .then(data => {
                if (data['lastPrice'] != undefined) {
                    this.etcData = data;
                }
            });
    }

    getBch() {
        this.tickerService.getBch()
            .then(data => {
                if (data['lastPrice'] != undefined) {
                    this.bchData = data;
                }
            });
    }

    // AdMob Banner
    showBanner() {
        
        let bannerConfig: AdMobFreeBannerConfig = {
            isTesting: true, // Remove in production
            autoShow: true,
            bannerAtTop: false,
            id: 'ca-app-pub-1621954105343720/2945962892',
            size: 'BANNER'
        };

        this.admob.banner.config(bannerConfig);

        this.admob.banner.prepare().then(() => {
            // success
        }).catch(e => console.log(e));
        
    }
}
