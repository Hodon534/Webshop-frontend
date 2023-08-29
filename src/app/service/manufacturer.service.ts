import { Injectable } from '@angular/core';
import { Manufacturer } from '../model/models/manufacturer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatMenuDefaultOptions } from '@angular/material/menu';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  private postManufacturer: string = "http://localhost:8080/api/v1/manufacturers/add";
  private allManufacturers: string = "http://localhost:8080/api/v1/manufacturers/all";
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  public addManufacturer(manufacturer: Manufacturer | undefined): Observable<Manufacturer> {
    this._snackBar.open("new manufacturer has been added to database", "Ok", { duration: 5000 });
    console.log(manufacturer);
    return this.http.post<Manufacturer>(this.postManufacturer, manufacturer);
  }

  public findAll(): Observable<Manufacturer[]> {
    return this.http.get<Manufacturer[]>(this.allManufacturers);
  };
}
