import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { LibraryModule } from '@ddeloy/dd-library';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import  { routing }  from './app.routes';
import {HomeComponent } from "./home/home.component";
import { BasicComponent } from './basic/basic.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { OtherComponent } from './other/other.component';
import { WijmoTableComponent } from './wijmo/wijmo.table.component';
import {DataSvc} from "./services/DataSvc";
import { NestedMenuComponent } from './nested-menu.component';
import {RouterModule} from "@angular/router";
// import {dougRouting} from "./doug/doug.routing";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    SecondaryComponent,
    OtherComponent,
    WijmoTableComponent,
    NestedMenuComponent,
  ],
  imports: [
    BrowserModule,
    LibraryModule,
    CommonModule,
    FormsModule,
    RouterModule,
    routing,
  //  dougRouting
  ],
  providers: [DataSvc],
  bootstrap: [AppComponent]
})
export class AppModule { }
