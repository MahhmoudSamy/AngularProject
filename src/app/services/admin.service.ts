import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  orders = [
    { id: 1, username: 'JohnDoe', date: new Date(), totalPrice: 199.99, productTitles: ['Classic Watch'], status: 'pending' },
    { id: 2, username: 'JaneDoe', date: new Date(), totalPrice: 249.99, productTitles: ['Modern Watch'], status: 'pending' }
  ];

  getOrders() {
    return this.orders;
  }

  updateOrderStatus(orderId, status) {
    const order = this.orders.find(order => order.id === orderId);
    if (order) {
      order.status = status;
    }
  }
}


