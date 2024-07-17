import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../types/types';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart/cart.service';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

product : Product = {} as Product
other: Product = {} as Product
quantity:number=1
constructor(private productService: ProductService, private route: ActivatedRoute,private cartService: CartService){}

ngOnInit(): void {
  this.getProductId();
} 

getProductId() {
  const productId = this.route.snapshot.paramMap.get('id');
  
  console.log('Product ID:', productId);
  if (productId) {
    this.productService.getProductById (Number(productId)).subscribe({
      next: (prod) => (this.product = prod),
      error: (error) => {
        console.error('Error retrieving the product:', error);
        
      }
    });
    this.productService.getRandomProductExcluding (Number(productId)).subscribe({
      next: (prod) => (this.other = prod),
      error: (error) => {
        console.error('Error retrieving the product:', error);
        
      }
    });
  } else {
    console.error('The ID in the URL is undefined or invalid');
  }
}
addItemCart(product_id?: number, quantity?:number): void {
  if (product_id !== undefined) {
    this.cartService.addItem(product_id, this.quantity).subscribe({
      next: (res) => {
        alert('Item Added.');
        console.log(res, product_id, this.quantity);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 400 && error.error && error.error.error) {
          alert(error.error.error +" Stock: " + this.product.stock);
        } else {
          console.error('Error Adding product:', error);
          alert(
            error
          );
        }
      },
    });
  }
}
incrementQuantity() {
  if (this.quantity < this.product.stock) {
    this.quantity++;
  }
}

decrementQuantity() {
  if (this.quantity > 1) {
    this.quantity--;
  }
}}