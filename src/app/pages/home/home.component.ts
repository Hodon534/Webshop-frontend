import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/models/product.model';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

const ROWS_HEIGHT: { [id: number]: number} = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  count = '12';
  allProducts: Product[] | undefined;
  filteredProducts: Product[] | undefined;
  productsSubscription: Subscription | undefined;

  constructor(private productService: ProductService, private cartService: CartService) {

  }

  ngOnInit(): void {
     this.productService.findAll().subscribe(data => {
      this.allProducts = data;
      this.filteredProducts = this.allProducts;
    });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
}

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];

}

onShowCategory(newCategory: string): void {
  this.category = newCategory;
  this.filterByCategory(newCategory);
}

onSortingByName(sort: string): void {
  if (sort == 'name asc') {
    this.sortProductsByNameAscending();
  } else if (sort == 'name desc') {
    this.sortProductsByNameDescending()
  } else if (sort == 'price asc') {
    this.sortProductsByPriceAscending()
  } else if (sort == 'price desc') {
    this.sortProductsByPriceDescending()
  }
}

public sortProductsByPriceAscending(): void {
  if (!this.filteredProducts) {
    return ;
  }

  this.filteredProducts.sort((productA, productB) => {
    const priceA = productA.price ?? '';
    const priceB = productB.price ?? '';

    if (priceA > priceB) {
      return 1;
    }
    if (priceA < priceB) {
      return -1;
    }
    return 0;
  });

}

public sortProductsByPriceDescending(): void {
  if (!this.filteredProducts) {
    return;
  }

  this.filteredProducts.sort((productA, productB) => {
    const priceA = productA.price ?? '';
    const priceB = productB.price ?? '';

    if (priceA < priceB) {
      return 1;
    }
    if (priceA > priceB) {
      return -1;
    }
    return 0;
  });
}

public sortProductsByNameAscending(): void {
  if (!this.filteredProducts) {
    return ;
  }

  this.filteredProducts.sort((productA, productB) => {
    const nameA = productA.name ?? '';
    const nameB = productB.name ?? '';

    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }
    return 0;
  });

}

public sortProductsByNameDescending(): void {
  if (!this.filteredProducts) {
    return;
  }

  this.filteredProducts.sort((productA, productB) => {
    const nameA = productA.name ?? '';
    const nameB = productB.name ?? '';

    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  });
}


public filterByCategory(newCategory: string): void {
  if (!this.allProducts) {
    return;
  }
  if (newCategory === "show all") {
    this.filteredProducts = this.allProducts;
  } else {
    this.filteredProducts = this.allProducts.filter((product) =>
    product.category === newCategory
  );
  }
}

onAddToCart(product: Product ): void {
  this.cartService.addToCart(
    this.cartService.productToCartItem(
      product, 1)
  );
}


}

