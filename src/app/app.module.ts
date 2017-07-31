import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { LibraryModule } from '@ddeloy/dd-library';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { OtherComponent } from './other/other.component';
import { WijmoTableComponent } from './wijmo/wijmo.table.component';
import { DataSvc } from './services/DataSvc';
import { NestedMenuComponent } from './shared/nested-menu.component';
import { routing } from './app.routes';

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
    BrowserAnimationsModule,
    LibraryModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [DataSvc],
  bootstrap: [AppComponent]
})
export class AppModule { }
