import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArtistsShellRoutingModule} from "./artists-shell-routing.module";
import { NumberFormatPipe } from 'src/app/shared/pipes/number-format-pipe';
@NgModule({
  declarations: [
    NumberFormatPipe,
  ],
    imports: [
        CommonModule,
        ArtistsShellRoutingModule,    
    ]
})
export class ArtistsShellModule { }
