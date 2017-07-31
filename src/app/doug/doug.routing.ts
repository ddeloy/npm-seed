import {Routes,RouterModule} from "@angular/router";
import {DougComponent} from "./doug.component";
import {RamanComponent} from "./raman.component";

const DOUG_ROUTES: Routes = [
  {path:'', component:DougComponent},
 // {path: 'raman', component:RamanComponent},

];

export const dougRouting = RouterModule.forChild(DOUG_ROUTES);
