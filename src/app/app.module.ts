import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { ThirdComponent } from './third/third.component';
import { PerentComponent } from './perent/perent.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    FirstComponent,
    ThirdComponent,
    PerentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
