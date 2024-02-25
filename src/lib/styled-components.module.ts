import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SxDirective } from './sx.directive';
import { ThemeProvider } from './theme-provider.service';
import { BoxComponent } from './Box.component';

@NgModule({
  declarations: [
    SxDirective,
    BoxComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ThemeProvider
  ],
  exports: [
    SxDirective,
    BoxComponent
  ]
})
export class StyledComponentsModule { }
