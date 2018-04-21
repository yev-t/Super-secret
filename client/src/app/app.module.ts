import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';   //Ng html parsing
import { FormsModule} from "@angular/forms";    //Forms import
import { HttpClientModule } from "@angular/common/http";   //To send/receive http

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewpetComponent } from './newpet/newpet.component';
import { DetailsComponent } from './details/details.component';
import { EditpetComponent } from './editpet/editpet.component';

import { HomePageService } from "./home-page/home-page.service";
import { NewpetService } from "./newpet/newpet.service";
import { DetailsService } from "./details/details.service";
import { EditpetService } from "./editpet/editpet.service";

@NgModule({
  declarations: [   //Components registry
    AppComponent,
    HomePageComponent,
    NewpetComponent,
    EditpetComponent,
    DetailsComponent,
  ],
  imports: [     //Module registry
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [   //Service registry
  	HomePageService,
    NewpetService,
    EditpetService,
    DetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
