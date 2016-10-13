import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule }  from '@angular/material';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail';
import { HeroSearchComponent } from './hero-search';
import { DashboardComponent } from './dashboard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    DashboardComponent
  ]
})
export class HeroesModule { }
