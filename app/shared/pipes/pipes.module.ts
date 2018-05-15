import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pipes
import { EllipsisPipe } from './ellipsis.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EllipsisPipe,
    FilterPipe
  ],
  exports: [
    EllipsisPipe,
    FilterPipe
  ]
})

export class PipesModule { }
