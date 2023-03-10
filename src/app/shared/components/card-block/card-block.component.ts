import {Component, OnInit} from '@angular/core';

interface ContractList {
  id: number,
  img: string;
  title: string,
  desc: string,
  hove_img: string,
}
@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent implements OnInit{

  public contractList: ContractList[] = [];

  ngOnInit(): void {
    this.contractList = [
      {
        id: 1,
        img: 'premium.png',
        hove_img: 'premium_hover.png',
        title: 'Premium Coverage',
        desc: 'All of our programs are designed to provide the best coverage for your vehicle.'
      },
      {
        id: 2,
        img: 'usa.png',
        hove_img: 'usa_hover.png',
        title: 'Nationwide Protection',
        desc: 'Our coverage can be used at any dealership or ASE Certified repair facility'
      },
      {
        id: 3,
        img: 'path4.png',
        hove_img: 'path4_hover.png',
        title: 'Superior Service',
        desc: 'Our claims and customer service team make using your policy an easy process.'
      },
      {
        id: 3,
        img: 'siren1.png',
        hove_img: 'siren1_hover.png',
        title: 'Emergency Roadside',
        desc: 'We\'re there when you need us. If you\'re stuck on the side of the road, call us first.'
      },
    ]
  }


}
