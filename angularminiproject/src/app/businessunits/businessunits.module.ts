import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessunitsRoutingModule } from './businessunits-routing.module';
import { BusinessunitsComponent } from './businessunits.component';


@NgModule({
  declarations: [BusinessunitsComponent],
  imports: [
    CommonModule,
    BusinessunitsRoutingModule
  ]
})
export class BusinessunitsModule { }
