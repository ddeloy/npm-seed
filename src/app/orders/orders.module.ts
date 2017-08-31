import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';
import { InProgressOrdersComponent } from './in-progress-orders/in-progress-orders.component';
import { OrdersService } from './orders.service';
import { MaterialModule } from '@angular/material';
const manageChecklistRoutes = [
  {
    path: 'orders',
    component: OrdersComponent,
    children: [
      {
        path: '',
        redirectTo: '/orders/completed',
        pathMatch: 'full',
      },
      {
        path: 'completed',
        component: CompletedOrdersComponent
      },
      {
        path: 'inprogress',
        component: InProgressOrdersComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(manageChecklistRoutes),
    MaterialModule
  ],
  declarations: [OrdersComponent, CompletedOrdersComponent, InProgressOrdersComponent],
  providers:[
    OrdersService
  ]
})
export class OrdersModule { }
