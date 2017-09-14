import { Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BasicComponent} from './basic/basic.component';
import {SecondaryComponent} from './secondary/secondary.component';
import {OtherComponent} from './other/other.component';
import {WijmoTableComponent} from './wijmo/wijmo.table.component';
import {WijmoGridComponent} from './wijmo-grid/wijmo-grid.component';
import {SelectCustomComponent} from './select-custom/select-custom.component';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import {PortalComponent} from './portal/portal.component';

const APP_ROUTES = [
  {
    path: 'customers',
    component: CustomersComponent,
    loadChildren: './customers/customers.module#CustomersModule',
    data: { preload: true }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    loadChildren: './orders/orders.module#OrdersModule',
    data: { preload: true }

  },
  {path: '', component: HomeComponent},
  {path: 'basic', component: BasicComponent},
  {path: 'secondary', component: SecondaryComponent},
  {path: 'other', component: OtherComponent},
  {path: 'wijmotable', component: WijmoTableComponent},
  {path: 'wijmogrid', component: WijmoGridComponent},
  {path: 'selectcustom', component: SelectCustomComponent},
  {path: 'portal', component: PortalComponent},
]

 export const routing = RouterModule.forRoot(APP_ROUTES);
