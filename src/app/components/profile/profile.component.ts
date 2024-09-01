import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = { username: '', email: '', gender: '', image: '' };
  orders = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUserInfo();
    this.orders = this.userService.getUserOrders();
  }

  editProfile() {
    // logic to edit profile
  }

  cancelOrder(orderId) {
    this.userService.cancelOrder(orderId);
  }
}
