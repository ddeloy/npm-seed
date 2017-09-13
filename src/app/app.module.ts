import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { LibraryModule, WijmoTableModule } from '@itradenetwork/itnlibrary';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { OtherComponent } from './other/other.component';

import { WijmoTableComponent } from './wijmo/wijmo.table.component';
import { DataSvc } from './services/DataSvc';
import { NestedMenuComponent } from './custom/nested-menu.component';
import { routing } from './app.routes';
import { WijmoGridComponent } from './wijmo-grid/wijmo-grid.component';
import {OptFilterPipe, SelectCustomComponent} from './select-custom/select-custom.component';
import {OrdersModule} from './orders/orders.module';
import {CustomersModule} from './customers/customers.module';
import {PortalComponent, ScienceJokeComponent} from './portal/portal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    SecondaryComponent,
    OtherComponent,
    WijmoTableComponent,
    NestedMenuComponent,
    WijmoGridComponent,
    SelectCustomComponent,
    OptFilterPipe,
    PortalComponent,
    ScienceJokeComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LibraryModule,
    CommonModule,
    FormsModule,
    WijmoTableModule,
    OrdersModule,
    CustomersModule,
    routing,
  ],
  providers: [DataSvc],
  bootstrap: [AppComponent],
  entryComponents: [ ScienceJokeComponent ],
})
export class AppModule { }
