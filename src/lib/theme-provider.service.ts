import { Injectable } from '@angular/core';

@Injectable()
export class ThemeProvider {

  constructor() { }

  classNames(props: any): { [key: string]: string, className: string} {
    return {className: ''};
  }

}
