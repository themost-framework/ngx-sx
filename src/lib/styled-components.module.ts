import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SxDirective } from './sx.directive';
import { ThemeProvider } from './theme-provider.service';
import { BoxComponent } from './Box.component';
import { GridComponent } from './Grid.component';

@NgModule({
  declarations: [
    SxDirective,
    BoxComponent,
    GridComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ThemeProvider
  ],
  exports: [
    SxDirective,
    BoxComponent,
    GridComponent
  ]
})
export class StyledComponentsModule { }
