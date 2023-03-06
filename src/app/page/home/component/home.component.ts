import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SelectOptions} from "../../../shared/components/select/select.component";
import {CardData} from "../../../shared/components/costs-card/costs-card.component";

interface ContractList {
  id: number,
  img: string;
  title: string,
  desc: string,
  hove_img: string,

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {


  public carouselOptions!: {};
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

  slides = [
    {img: "xmd.png"},
    {img: "folds.png"},
    {img: "brigh.png"},
  ]

  public contractList: ContractList[] = [];

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

    this.carouselOptions = {
      autoplay: true,
      autoplaySpeed: 2000,
      swipe: true,
      arrows: false,
      infinite: true,
      centerMode: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            sliderToScroll: 1,
            swipe: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            sliderToScroll: 1,
            swipe: true,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 1,
            sliderToScroll: 1,
            swipe: false,
          },
        },
      ],
    };
  }

  submit() {
    console.log(this.aboutForm.value)
  }

  ngAfterViewInit() {
    // console.log(this.slider,'this.slider');
    // if (this.slider) {
    //   this.slider.unslick();
    //   this.slider.config = this.carouselOptions;
    // }
  }
}
