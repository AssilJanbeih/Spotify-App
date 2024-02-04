import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import { ImageWithButtonModule } from '../image-with-button/image-with-button.module';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    ImageWithButtonModule,
  ],
  exports: [NotFoundComponent]
})
export class NotFoundModule { }
