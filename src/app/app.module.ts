import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DiamondFabricatorComponent } from './diamond-fabricator/diamond-fabricator.component';
import { IsogrammTesterComponent } from './isogramm-tester/isogramm-tester.component';
import { StringReverserComponent } from './string-reverser/string-reverser.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DiamondFabricatorComponent,
    IsogrammTesterComponent,
    StringReverserComponent,
    IntroductionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
