import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { AdMobFree } from '@ionic-native/admob-free';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TickerServiceProvider } from '../providers/ticker-service/ticker-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TickerServiceProvider,
  ]
})
export class AppModule {}
