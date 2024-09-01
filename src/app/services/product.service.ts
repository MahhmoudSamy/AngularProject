@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { id: 1, name: 'Classic Watch', price: 199.99, details: 'A timeless classic.', image: 'assets/images/watch1.jpg' },
    { id: 2, name: 'Modern Watch', price: 249.99, details: 'A modern twist on a classic.', image: 'assets/images/watch2.jpg' }
  ];

  // Existing methods...

  createProduct(product) {
    this.products.push(product);
  }

  updateProduct(product) {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index > -1) {
      this.products[index] = product;
    }
  }

  deleteProduct(productId) {
    this.products = this.products.filter(product => product.id !== productId);
  }
}

