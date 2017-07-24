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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    SecondaryComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    LibraryModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
