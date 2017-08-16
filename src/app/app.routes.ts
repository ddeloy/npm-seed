import { Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BasicComponent} from './basic/basic.component';
import {SecondaryComponent} from './secondary/secondary.component';
import {OtherComponent} from './other/other.component';
import {WijmoTableComponent} from './wijmo/wijmo.table.component';
import {WijmoGridComponent} from "./wijmo-grid/wijmo-grid.component";
import {SelectCustomComponent} from "./select-custom/select-custom.component";

const APP_ROUTES = [
  {path: '', component: HomeComponent},
  {path: 'basic', component: BasicComponent},
  {path: 'secondary', component: SecondaryComponent},
  {path: 'other', component: OtherComponent},
  {path: 'wijmotable', component: WijmoTableComponent},
  {path: 'wijmogrid', component: WijmoGridComponent},
  {path: 'selectcustom', component: SelectCustomComponent},
]

 export const routing = RouterModule.forRoot(APP_ROUTES);
