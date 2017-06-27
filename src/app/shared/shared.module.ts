import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelComponent } from './channel.component';

@NgModule({
  imports: [ CommonModule],
  exports : [
    CommonModule,
    ChannelComponent
  ],
  declarations: [ ChannelComponent ],
})
export class SharedModule { }
