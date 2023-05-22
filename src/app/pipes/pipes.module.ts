import { NgModule } from '@angular/core';
import { ConvertDatePipe } from './convert-date.pipe';

@NgModule({
  declarations: [ConvertDatePipe],
  exports: [ConvertDatePipe]
})
export class PipesModule { }
