import {Routes,RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BasicComponent} from "./basic/basic.component";
import {SecondaryComponent} from "./secondary/secondary.component";
import {OtherComponent} from "./other/other.component";
import {WijmoTableComponent} from "./wijmo/wijmo.table.component";

const APP_ROUTES = [
  {path:'', component:HomeComponent},
  {path: 'basic', component:BasicComponent},
  {path: 'secondary', component:SecondaryComponent},
  {path: 'other', component:OtherComponent},
  {path: 'wijmo', component:WijmoTableComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES, {useHash:true});
