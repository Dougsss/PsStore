import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { NewComponent } from './pages/new/new.component';
import { ExclusiveComponent } from './pages/exclusive/exclusive.component';
import { SaleComponent } from './pages/sale/sale.component';
import { BestComponent } from './pages/best/best.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,
    NewComponent,
    ExclusiveComponent,
    SaleComponent,
    BestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
