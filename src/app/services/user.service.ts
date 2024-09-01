import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = { username: 'JohnDoe', email: 'john@example.com', gender: 'male', image: 'assets/images/user.jpg' };
  orders = [
    { id: 1, productName: 'Classic Watch', status: 'accepted' },
    { id: 2, productName: 'Modern Watch', status: 'pending' },
  ];

  getUserInfo() {
    return this.user;
  }

  getUserOrders() {
    return this.orders;
  }

  cancelOrder(orderId: number) {
    this.orders = this.orders.map(order =>
      order.id === orderId ? { ...order, status: 'cancelled' } : order
    );
  }
}
