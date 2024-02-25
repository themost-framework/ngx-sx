import { Component } from '@angular/core';
import { StyledComponent } from './styled.component';

@Component({
    selector: 'Box',
    template: `<ng-content></ng-content>`,
    styles: [`
        :host {
            display: contents;
        }
    `]
})
export class BoxComponent extends StyledComponent {
}