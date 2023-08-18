import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl: string = 'http://localhost:8080/api/v1/products/all';
  private postProduct: string = "http://localhost:8080/api/v1/products/add";
  private getSingleProduct: string = "http://localhost:8080/api/v1/products/find/id/";

   constructor(private http: HttpClient, private _snackBar: MatSnackBar) { 
  }
 
/*     constructor(private http: HttpClient, private _snackBar: MatSnackBar) { 
      this.productsUrl = '/api/products';
    } */
      public findAll(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl);
      };

    
    public addProduct(product: Product | undefined): Observable<Product> {
      this._snackBar.open("new product has been added to database", "Ok", { duration: 5000 });
      this.http.post<Cart>('http://localhost:8080/api/v1/cart/add', null);
      return this.http.post<Product>(this.postProduct, product);
    }

     public getProductById(id: number) : Observable<Product> {
      const url = `${this.getSingleProduct}${id}`;
      return this.http.get<Product>(url);
    } 

}


  