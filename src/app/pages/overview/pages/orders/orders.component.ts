import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from 'src/app/model/models/order.model';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [
    /* {
      id: 1,
      items: [
        {
          id: 1,
          productId: 4,
          productName: "Nike Air Jordan IV",
          productImage: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          price: 15,
          quantity: 2
        },
        {
          id: 2,
          productId: 5,
          productName: "Adidas Superstar",
          productImage: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          price: 20,
          quantity: 3
        },
        {
          id: 3,
          productId: 6,
          productName: "Puma Suede Classic",
          productImage: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          price: 25,
          quantity: 1
        }
      ],
      status: "IN PROGRESS",
      createdAt: "01-01-2023",
      total: 555,
      userId: 2
    } */
  ];
  expandedOrder: any | null = null;
  columnsToDisplay = ['id', 'createdAt', 'total', 'status'];

   constructor(private orderService: OrderService) {}


  ngOnInit(): void {
    this.getOrders();
  }

   getOrders() {
    this.orderService.findAll().subscribe((orders: Order[]) => {
      console.log(orders)
      this.orders = orders;
    });
  }  


}
