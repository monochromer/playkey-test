import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { CatalogComponent } from './components/catalog/catalog.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FilterComponent } from './components/filter/filter.component';
import { SliderComponent } from './components/slider/slider.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductGridComponent,
    ProductComponent,
    CatalogComponent,
    LoaderComponent,
    FilterComponent,
    SliderComponent,
    BenefitsComponent,
    TopSectionComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
