import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './subcomponents/top-nav/top-nav.component';
import { FooterComponent } from './subcomponents/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewMainImageComponent } from './modals/view-main-image/view-main-image.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    HomeComponent,
    ViewMainImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
