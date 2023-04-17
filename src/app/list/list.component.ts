import { Component } from '@angular/core';
import { Product } from '../models/product';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  products: Product[] = [];
  constructor(private db: DBService) {
    this.db.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

  deleteProduct(productId: any) {
    this.db
      .deleteproduct(productId)
      .then(() => {})
      .catch(() => {});
  }
}
