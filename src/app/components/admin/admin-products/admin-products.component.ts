import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products = [];
  filteredProducts = [];
  searchTerm = '';
  isEditMode = false;
  selectedProduct = { id: null, name: '', price: 0, details: '', image: '' };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  onSearch() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedProduct.image = file ? file.name : '';
  }

  editProduct(product) {
    this.isEditMode = true;
    this.selectedProduct = { ...product };
  }

  deleteProduct(productId) {
    this.productService.deleteProduct(productId);
    this.products = this.products.filter(product => product.id !== productId);
    this.filteredProducts = this.filteredProducts.filter(product => product.id !== productId);
  }

  onSubmit() {
    if (this.isEditMode) {
      this.productService.updateProduct(this.selectedProduct);
    } else {
      this.productService.createProduct(this.selectedProduct);
    }
    this.resetForm();
  }

  resetForm() {
    this.isEditMode = false;
    this.selectedProduct = { id: null, name: '', price: 0, details: '', image: '' };
  }
}
