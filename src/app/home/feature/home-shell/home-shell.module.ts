import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeShellRoutingModule} from "./home-shell-routing.module";
import { HomeComponent } from '../home-dashboard/home.component';
@NgModule({
  declarations: [],
    imports: [
        CommonModule,
        HomeComponent,
        HomeShellRoutingModule,
    ]
})
export class HomeShellModule { }
