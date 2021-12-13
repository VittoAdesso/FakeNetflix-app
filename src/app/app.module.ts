import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './page/global/global.component';
import { NavComponent } from './page/global/nav/nav.component';
import { HeroComponent } from './page/global/hero/hero.component';
import { FilmsComponent } from './page/global/films/films.component';
import { GenerosComponent } from './page/global/films/generos/generos.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    NavComponent,
    HeroComponent,
    FilmsComponent,
    GenerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
