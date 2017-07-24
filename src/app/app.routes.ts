import {Routes,RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BasicComponent} from "./basic/basic.component";

const APP_ROUTES = [
  {path:'', component:HomeComponent},
  {path: 'basic', component:BasicComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES, {useHash:true});
