import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { MaterialModule }       from '@angular/material';
import { NgModule }             from '@angular/core';

//Faking web service
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './shared';

import { AppComponent }         from './app.component';
import { HeroesModule, HeroService }           from './heroes';

import { routing }              from './app.router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HeroesModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing,
    MaterialModule.forRoot()
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
