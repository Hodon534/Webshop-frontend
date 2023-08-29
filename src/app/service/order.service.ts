import { Injectable } from '@angular/core';
import { Order } from '../model/models/order.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private getAllOrders: string = "http://localhost:8080/api/v1/orders/all";

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.getAllOrders);
  };
}
