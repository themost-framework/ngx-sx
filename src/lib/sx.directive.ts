import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { SystemClassNameProps } from 'system-classnames/bootstrap';
import { ThemeProvider } from './theme-provider.service';
import { BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, MinHeightProps, MinWidthProps, PositionProps, SpaceProps, TypographyProps } from 'styled-system';

export declare type SxProps = SpaceProps & ColorProps & TypographyProps & FlexboxProps & GridProps & LayoutProps & BorderProps & PositionProps & MinWidthProps & MinHeightProps;

@Directive({
  selector: '[sx]'
})
export class SxDirective implements OnInit {

  @Input() sx: SxProps = {};

  constructor(private element: ElementRef, private themeProvider: ThemeProvider) { }
  ngOnInit(): void {
    const result = this.themeProvider.classNames(this.sx);
    if (result.className.length > 0) {
      const classNames = result.className.split(' ');
      this.element.nativeElement.classList.add(...classNames);
    }
  }

}
