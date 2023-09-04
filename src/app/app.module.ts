import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroOverlayComponent } from './hero-overlay/hero-overlay.component';
import { CompanyAdvantagesComponent } from './company-advantages/company-advantages.component';
import { CompanyActivityComponent } from './company-activity/company-activity.component';
import { CompanyTeamComponent } from './company-team/company-team.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroOverlayComponent,
    CompanyAdvantagesComponent,
    CompanyActivityComponent,
    CompanyTeamComponent,
    ClientsListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
