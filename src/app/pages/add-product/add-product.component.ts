import { Component, OnInit } from '@angular/core';
import { Categories, getAllEnumStringValues } from 'src/app/model/enums/categories';
import { Manufacturer } from 'src/app/model/models/manufacturer.model';
import { Product } from 'src/app/model/models/product.model';
import { ManufacturerService } from 'src/app/service/manufacturer.service';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  categories: string[] = getAllEnumStringValues(Categories);
  manufacturers: Manufacturer[] = [];
  manufacturersData: { [key: string]: number } = {};
  selectedManufacturerName: string = '';
  selectedManufacturerId: number | undefined;
  
  constructor( private productService: ProductService, private manufacturerService: ManufacturerService) {
  }
  
  ngOnInit(): void {
    this.getAllManufacturers();
  }

  onSubmit() {
    this.selectedManufacturerId = this.manufacturersData[this.selectedManufacturerName];
    this.product.manufcturerId = this.selectedManufacturerId;
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

  getAllManufacturers() {
    this.manufacturerService.findAll().subscribe((manufacturers: Manufacturer[]) => {
      this.manufacturers = manufacturers;
      this.manufacturersData = {};
      manufacturers.forEach((manufacturer) => {
        this.manufacturersData[manufacturer.name] = manufacturer.id;
      });
    });
  }

  onManufacturerNameSelected() {
    this.selectedManufacturerId = this.manufacturersData[this.selectedManufacturerName];
  }
  


}
