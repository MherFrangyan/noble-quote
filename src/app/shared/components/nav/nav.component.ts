import {Component, OnInit} from '@angular/core';

interface NavItems {
  id: number,
  name: string,
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public navItem: NavItems[] = [];

  public search: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.navItem = [
      {id: 1, name: 'Get a Quote'},
      {id: 2, name: 'Get Covered'},
      {id: 3, name: 'Give Back'}
    ]
  }

  searchValue(val: string) {
    this.search = val;
  }
}
