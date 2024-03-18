import { Component, Input } from '@angular/core';
import { StyledComponent, StyledInput } from './styled.component';
import { LayoutProps } from 'styled-system';

@Component({
    selector: 'Grid',
    template: `<ng-content></ng-content>`
})
export class GridComponent extends StyledComponent {
    @StyledInput() @Input('display') override display: LayoutProps['display'] = 'grid';
}