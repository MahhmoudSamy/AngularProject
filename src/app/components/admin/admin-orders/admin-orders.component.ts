import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.orders = this.adminService.getOrders();
  }

  modifyOrderState(order) {
    this.adminService.updateOrderStatus(order.id, order.status);
  }
}
