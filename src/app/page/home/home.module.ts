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
import {QuoteComponent} from "../../shared/components/quote/quote.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {OrganizationComponent} from "../../shared/components/organization/organization.component";
import {CardBlockComponent} from "../../shared/components/card-block/card-block.component";
import {PointsComponent} from "../../shared/components/points/points.component";
import {SearchComponent} from "../../shared/components/search/search.component";

@NgModule({
    declarations: [
        HomeComponent,
        NavComponent,
        SelectComponent,
        CostsCardComponent,
        QuoteComponent,
        FooterComponent,
        OrganizationComponent,
        CardBlockComponent,
        PointsComponent,
        SearchComponent,
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
