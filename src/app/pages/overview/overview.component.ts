import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/models/order.model';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  allOrders: Order[] | undefined;

  constructor(private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.orderService.findAll().subscribe(data => {
     this.allOrders = data;
   });
  }

}
