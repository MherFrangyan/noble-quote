import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SelectOptions} from "../../../shared/components/select/select.component";
import {CardData} from "../../../shared/components/costs-card/costs-card.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {


  public select1: FormControl = new FormControl('');
  public select2: FormControl = new FormControl('');
  public select3: FormControl = new FormControl('');
  public select4: FormControl = new FormControl('');

  public search: string = '';
  public aboutForm: FormGroup = new FormGroup({
    select1: this.select1,
    select2: this.select2,
    select3: this.select3,
    select4: this.select4,
    firstName: new FormControl(''),
    email: new FormControl('', Validators.email),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
  });
  public costsCard: CardData[] = [];
  public optionsList: SelectOptions[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.optionsList = [
      {id: 1, title: 'Option 1', value: 'option1'},
      {id: 2, title: 'Option 2', value: 'option2'},
      {id: 3, title: 'Option 3', value: 'option3'},
      {id: 4, title: 'Option 4', value: 'option4'},
    ];

    this.costsCard = [
      {id: 1, title: 'engine', price: 5000},
      {id: 2, title: 'transmission', price: 3500},
      {id: 3, title: 'ac', price: 2500},
    ];


  }

  submit() {
    console.log(this.aboutForm.value)
  }

  searchValue(val: string) {
    this.search = val;
  }
}
