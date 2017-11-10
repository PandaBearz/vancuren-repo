import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { FilterPipe } from './pipes/filter';

import { MarketsService } from './services/markets.service';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TransactionPage } from '../pages/transaction/transaction';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AuthProvider } from '../providers/auth/auth';
import { DataProvider } from '../providers/data/data';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TransactionPage,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TransactionPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MarketsService,
    FirebaseProvider,
    AuthProvider,
    DataProvider
  ]
})
export class AppModule {}
