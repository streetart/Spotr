import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '',
        component: HomeComponent
      },
      { path: 'location',
        component: LocationComponent
      },
      { path: 'beaches',
        component: BeachesComponent
      },
      { path: 'about',
        component: AboutComponent
      },
      { path: 'contact',
        component: ContactComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
