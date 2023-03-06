import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./component/home.component";
import {HomeRoutingModule} from "./home.routing.module";
import {NavComponent} from "../../shared/components/nav/nav.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SelectComponent} from "../../shared/components/select/select.component";
import {CostsCardComponent} from "../../shared/components/costs-card/costs-card.component";
import {SlickCarouselModule} from "ngx-slick-carousel";

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    SelectComponent,
    CostsCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
})
export class HomeModule {
}
