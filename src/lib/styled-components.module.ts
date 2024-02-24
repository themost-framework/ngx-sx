import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SxDirective } from './sx.directive';
import { ThemeProvider } from './theme-provider.service';
import { StyledComponentDirective } from './styled.component';

@NgModule({
  declarations: [
    SxDirective,
    StyledComponentDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ThemeProvider
  ],
  exports: [
    SxDirective,
    StyledComponentDirective
  ]
})
export class StyledComponentsModule { }
