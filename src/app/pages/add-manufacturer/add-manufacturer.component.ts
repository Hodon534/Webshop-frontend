import { Component } from '@angular/core';
import { Manufacturer } from 'src/app/model/models/manufacturer.model';
import { ManufacturerService } from 'src/app/service/manufacturer.service';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html'
})
export class AddManufacturerComponent {
  manufacturer: Manufacturer = new Manufacturer();
  
  constructor(private manufacturerService: ManufacturerService) {
  }
  
  onSubmit() {
    this.manufacturerService.addManufacturer(this.manufacturer).subscribe(
      (response) => {
        console.log("Manufacturer added successfully:", response);
        this.manufacturer = new Manufacturer();
      },
      (error) => {
        console.error("Error adding manufacturer:", error);
      }
    );
  }
}
