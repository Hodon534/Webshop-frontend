import { Component, EventEmitter, Output } from '@angular/core';
import { Categories, getAllEnumStringValues } from 'src/app/model/enums/categories';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  showAllCategory: string = "show all";
  categories: string[] = getAllEnumStringValues(Categories);

  ngOnInit():void {
    this.categories.unshift(this.showAllCategory);
  }
  
  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

}
