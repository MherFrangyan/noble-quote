import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  constructor() {
  }
  public carouselOptions!: {};

  public slides = [
    {img: "xmd.png"},
    {img: "folds.png"},
    {img: "brigh.png"},
  ]
  ngOnInit(): void {
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


}
