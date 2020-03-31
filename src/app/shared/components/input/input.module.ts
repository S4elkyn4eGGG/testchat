import { NgModule } from '@angular/core';

import { InputComponent } from './input.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [InputComponent],
  imports: [SharedModule],
  exports: [InputComponent],
})
export class InputModule {}
