import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ProspectsComponent } from './prospects/prospects.component';
import { InquiriesDialogComponent, DialogInquiriesComponent } from './inquiries/inquiries.component';
import { CustomersService } from './customers.service';
import { MaterialModule } from '@angular/material';
import {DialogRequestsComponent, RequestsDialogComponent} from './requests/requests.component';
const customersRoutes = [
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      {
        path: '',
        redirectTo: '/customers/list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: CustomersListComponent
      },
      {
        path: 'prospects',
        component: ProspectsComponent
      },
      {
        path: 'inquiries',
        component: DialogInquiriesComponent
      },
      {
        path: 'requests',
        component: DialogRequestsComponent
      }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customersRoutes),
    MaterialModule
  ],
  declarations: [CustomersComponent, CustomersListComponent, ProspectsComponent,  InquiriesDialogComponent, DialogInquiriesComponent,
    RequestsDialogComponent, DialogRequestsComponent],
  providers: [CustomersService],
  entryComponents: [ InquiriesDialogComponent, RequestsDialogComponent ],
})
export class CustomersModule { }
