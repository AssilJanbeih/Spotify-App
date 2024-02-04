import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageWithButtonComponent } from './image-with-button.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ImageWithButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ImageWithButtonComponent]
})
export class ImageWithButtonModule { }
