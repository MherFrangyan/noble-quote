import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output()
  public searchValue: EventEmitter<string> = new EventEmitter<string>();

  public search: string = '';

  changeValue() {
    this.searchValue.emit(this.search)
  }
}
