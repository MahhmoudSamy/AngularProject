import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  promotions = [
    { title: '50% Off on All Watches', description: 'Get 50% off on all hand watches this summer!', image: 'assets/images/promo1.jpg' },
    { title: 'Buy One Get One Free', description: 'Limited time offer on selected models.', image: 'assets/images/promo2.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
