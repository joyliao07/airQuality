import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { YourCityComponent } from './your-city/your-city.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { YourCityResultComponent } from './your-city-result/your-city-result.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';
import { ThankYouComponent } from './thank-you/thank-you.component';

const appRoutes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'city', component: YourCityComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'thank-you', component: ThankYouComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    YourCityComponent,
    HeaderComponent,
    AboutComponent,
    IntroComponent,
    YourCityResultComponent,
    ContactComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
  ],
  providers: [
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
