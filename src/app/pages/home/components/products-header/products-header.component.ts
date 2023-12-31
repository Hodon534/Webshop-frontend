import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html', 
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() sortingByName = new EventEmitter<string>();
  sort = 'name desc';
  itemsShowCount = 12;


  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortingByName.emit(newSort);
  }

  onItemsUpdated(count: number) : void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

}
