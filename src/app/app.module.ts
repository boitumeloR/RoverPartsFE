import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './subcomponents/top-nav/top-nav.component';
import { FooterComponent } from './subcomponents/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewMainImageComponent } from './modals/view-main-image/view-main-image.component';
import { ViewPartComponent } from './pages/view-part/view-part.component';
import { SlidingCartComponent } from './subcomponents/sliding-cart/sliding-cart.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LoginComponent } from './modals/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    HomeComponent,
    ViewMainImageComponent,
    ViewPartComponent,
    SlidingCartComponent,
    ShopComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
