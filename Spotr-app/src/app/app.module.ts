import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';


import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BeachesComponent } from './beaches/beaches.component';
import { LocationComponent } from './location/location.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherComponent } from './weather/weather.component';
import { BeachProfileComponent } from './beach-profile/beach-profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BeachCardsComponent } from './beach-cards/beach-cards.component';
import { BeachDescComponent } from './beach-desc/beach-desc.component';
import {AngularFireStorageModule} from 'angularfire2/storage';

import { ItemService } from './service/item.service';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    UserComponent,
    HeaderComponent,
    HomeComponent,
    BeachesComponent,
    LocationComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    WeatherComponent,
    BeachProfileComponent,
    NotfoundComponent,
    BeachCardsComponent,
    BeachDescComponent,
    ItemsComponent,


  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularFs'),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '',
        component: HomeComponent
      },
      { path: 'location',
        component: LocationComponent
      },
      { path: 'beaches/:id',
        component: BeachProfileComponent
      },
      { path: 'beaches',
        component: BeachesComponent
      },
      { path: 'beachesSelection',
        component: BeachCardsComponent
      },
      { path: 'about',
        component: AboutComponent
      },
      { path: 'contact',
        component: ContactComponent
      },
      { path: '**',
        component: NotfoundComponent
      },
    ])
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
