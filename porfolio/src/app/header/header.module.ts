import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    TituloComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
