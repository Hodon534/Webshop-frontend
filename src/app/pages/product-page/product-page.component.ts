import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/models/product.model';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.css']
})
export class ProductPageComponent {
 product: Product | undefined;
 quantity: number = 1;
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService) {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId !== null) {
      this.productService.getProductById(parseInt(productId, 10)).subscribe((product) => {
        this.product = product;
      });
    } else {
      console.error('Product ID is null');
    }

    

  }

  onAddToCart(product: Product ): void {
    this.cartService.addToCart(
      this.cartService.productToCartItem(
        product, this.quantity));
    this.quantity = 1;
  }

  onAddQuantity() {
      if (this.product && this.product.inStock !== undefined && this.product.inStock > this.quantity) {
        this.quantity++;
      }
    
    
  }

  onRemoveQuantity() {
    if(this.quantity > 1) {
      this.quantity--;
    }
  }

}
