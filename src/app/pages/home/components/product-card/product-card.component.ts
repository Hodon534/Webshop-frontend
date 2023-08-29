import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/models/product.model';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();

  @Output() productEvent = new EventEmitter<Product>();

  constructor(private productService: ProductService) {
  }

  
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }


}
