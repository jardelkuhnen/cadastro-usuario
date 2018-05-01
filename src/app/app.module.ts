import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from './../pages/principal/principal';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { UserService } from './../providers/user/user.service';
import { HttpModule } from '@angular/http';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDiGL7nSVouMMqD7ZgqTwW0ZxOyAgyJkew",
  authDomain: "cadastro-usuario-1a40f.firebaseapp.com",
  databaseURL: "https://cadastro-usuario-1a40f.firebaseio.com",
  storageBucket: "cadastro-usuario-1a40f.appspot.com"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
