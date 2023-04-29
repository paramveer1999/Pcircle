import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { PrimengModule } from '../primeng.module';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    DetailsComponent,
    PrimengModule
  ]
})
export class SharedModule { }
