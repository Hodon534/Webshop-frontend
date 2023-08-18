import { Component } from '@angular/core';
import { Categories, getAllEnumStringValues } from 'src/app/model/enums/categories';
import { Product } from 'src/app/model/product/product';
import { ProductService } from 'src/app/service/product-service/product-service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent {
  product: Product = new Product();
  categories: string[] = getAllEnumStringValues(Categories);
  
  constructor( private productService: ProductService) {
  }
  
  onSubmit() {
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe(
      (response) => {
        console.log("Product added successfully:", response);
        this.product = new Product();
      },
      (error) => {
        console.error("Error adding product:", error);
      }
    );
  }


}
