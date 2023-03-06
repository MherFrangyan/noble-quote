import {Component, Input} from '@angular/core';

export interface CardData {
  id: number,
  title:string,
  price: number,
}
@Component({
  selector: 'app-costs-card',
  templateUrl: './costs-card.component.html',
  styleUrls: ['./costs-card.component.scss']
})
export class CostsCardComponent {
 @Input()
  public cardData: CardData[]=[]
}
