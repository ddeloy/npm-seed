import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ProspectsComponent } from './prospects/prospects.component';
import { InquiriesComponent } from './inquiries/inquiries.component';
import { CustomersService } from './customers.service';
import { MaterialModule } from '@angular/material';
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
        component: InquiriesComponent
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
  declarations: [CustomersComponent, CustomersListComponent, ProspectsComponent, InquiriesComponent],
  providers: [CustomersService]
})
export class CustomersModule { }
