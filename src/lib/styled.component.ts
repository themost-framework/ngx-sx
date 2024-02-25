import { Component, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { BackgroundProps, ColorProps, SpaceProps, TextColorProps,
  TypographyProps, GridProps,
  LayoutProps, BorderProps, FlexboxProps, DisplayProps, PositionProps, MinWidthProps, MinHeightProps, MaxWidthProps, MaxHeightProps, TextStyleProps } from 'styled-system';
import { ThemeProvider } from './theme-provider.service';
import * as CSS from 'csstype';


export declare interface StyledInputAnnotation {
  [key: string]: any;
  styledInput: string[];
}

export function StyledInput() {
  return function (target: any, propertyKey: string) {
    const styledInputAnnotation = target as StyledInputAnnotation;
    if (styledInputAnnotation.styledInput == null) {
      Object.defineProperty(styledInputAnnotation, 'styledInput', {
        value: [],
        writable: true,
        enumerable: false,
        configurable: false
      });
    }
    // add property as styled input
    styledInputAnnotation.styledInput.push(propertyKey);
  };
}
@Component({
  selector: 'styled',
  template: `<ng-content></ng-content>`,
})
export class StyledComponent implements SpaceProps, ColorProps,
TypographyProps, FlexboxProps, GridProps,
LayoutProps, BorderProps, PositionProps, MinWidthProps, MinHeightProps, OnInit, OnChanges {
  
  protected contentElement?: HTMLElement;

  @Input('as') as: string = 'div';

  @StyledInput() @Input('m') m: SpaceProps['m'];
  @StyledInput() @Input('mt') mt: SpaceProps['mt'];
  @StyledInput() @Input('mr') mr: SpaceProps['mr'];
  @StyledInput() @Input('mb') mb: SpaceProps['mb'];
  @StyledInput() @Input('ml') ml: SpaceProps['ml'];
  @StyledInput() @Input('mx') mx: SpaceProps['mx'];
  @StyledInput() @Input('my') my: SpaceProps['my'];
  @StyledInput() @Input('p') p: SpaceProps['p'];
  @StyledInput() @Input('pt') pt: SpaceProps['pt'];
  @StyledInput() @Input('pr') pr: SpaceProps['pr'];
  @StyledInput() @Input('pb') pb: SpaceProps['pb'];
  @StyledInput() @Input('pl') pl: SpaceProps['pl'];
  @StyledInput() @Input('px') px: SpaceProps['px'];
  @StyledInput() @Input('py') py: SpaceProps['py'];

  @StyledInput() @Input('margin') margin: SpaceProps['margin'];
  @StyledInput() @Input('marginTop') marginTop: SpaceProps['marginTop'];
  @StyledInput() @Input('marginRight') marginRight: SpaceProps['marginRight'];
  @StyledInput() @Input('marginBottom') marginBottom: SpaceProps['marginBottom'];
  @StyledInput() @Input('marginLeft') marginLeft: SpaceProps['marginLeft'];
  @StyledInput() @Input('marginX') marginX: SpaceProps['marginX'];
  @StyledInput() @Input('marginY') marginY: SpaceProps['marginY'];
  @StyledInput() @Input('padding') padding: SpaceProps['padding'];
  @StyledInput() @Input('paddingTop') paddingTop: SpaceProps['paddingTop'];
  @StyledInput() @Input('paddingRight') paddingRight: SpaceProps['paddingRight'];
  @StyledInput() @Input('paddingBottom') paddingBottom: SpaceProps['paddingBottom'];
  @StyledInput() @Input('paddingLeft') paddingLeft: SpaceProps['paddingLeft'];
  @StyledInput() @Input('paddingX') paddingX: SpaceProps['paddingX'];
  @StyledInput() @Input('paddingY') paddingY: SpaceProps['paddingY'];

  // ColorProps
  @StyledInput() @Input('color') color: ColorProps['color'];
  @StyledInput() @Input('bg') bg: ColorProps['bg'];
  @StyledInput() @Input('backgroundColor') backgroundColor: ColorProps['backgroundColor'];
  @StyledInput() @Input('opacity') opacity: ColorProps['opacity'];

  // TypographyProps
  @StyledInput() @Input('fontFamily') fontFamily: TypographyProps['fontFamily'];
  @StyledInput() @Input('fontSize') fontSize: TypographyProps['fontSize'];
  @StyledInput() @Input('fontWeight') fontWeight: TypographyProps['fontWeight'];
  @StyledInput() @Input('lineHeight') lineHeight: TypographyProps['lineHeight'];
  @StyledInput() @Input('letterSpacing') letterSpacing: TypographyProps['letterSpacing'];
  @StyledInput() @Input('textAlign') textAlign: TypographyProps['textAlign'];
  @StyledInput() @Input('fontStyle') fontStyle: TypographyProps['fontStyle'];
  @StyledInput() @Input('textTransform') textTransform: TextStyleProps['textStyle'];

  // FlexboxProps
  @StyledInput() @Input('alignContent') alignContent: FlexboxProps['alignContent'];
  @StyledInput() @Input('alignItems') alignItems: FlexboxProps['alignItems'];
  @StyledInput() @Input('alignSelf') alignSelf: FlexboxProps['alignSelf'];
  @StyledInput() @Input('justifyContent') justifyContent: FlexboxProps['justifyContent'];
  @StyledInput() @Input('justifyItems') justifyItems: FlexboxProps['justifyItems'];
  @StyledInput() @Input('justifySelf') justifySelf: FlexboxProps['justifySelf'];
  @StyledInput() @Input('flexWrap') flexWrap: FlexboxProps['flexWrap'];
  @StyledInput() @Input('flexBasis') flexBasis: FlexboxProps['flexBasis'];
  @StyledInput() @Input('flexDirection') flexDirection: FlexboxProps['flexDirection'];
  @StyledInput() @Input('flex') flex: FlexboxProps['flex'];

  // GridProps
  @StyledInput() @Input('gridColumn') gridColumn: GridProps['gridColumn'];
  @StyledInput() @Input('gridRow') gridRow: GridProps['gridRow'];
  @StyledInput() @Input('gridAutoFlow') gridAutoFlow: GridProps['gridAutoFlow'];
  @StyledInput() @Input('gridAutoColumns') gridAutoColumns: GridProps['gridAutoColumns'];
  @StyledInput() @Input('gridAutoRows') gridAutoRows: GridProps['gridAutoRows'];
  @StyledInput() @Input('gridTemplateColumns') gridTemplateColumns: GridProps['gridTemplateColumns'];
  @StyledInput() @Input('gridTemplateRows') gridTemplateRows: GridProps['gridTemplateRows'];
  @StyledInput() @Input('gridTemplateAreas') gridTemplateAreas: GridProps['gridTemplateAreas'];
  @StyledInput() @Input('gridArea') gridArea: GridProps['gridArea'];

  // LayoutProps
  @StyledInput() @Input('width') width: LayoutProps['width'];
  @StyledInput() @Input('height') height: LayoutProps['height'];
  @StyledInput() @Input('minWidth') minWidth: LayoutProps['minWidth'];
  @StyledInput() @Input('minHeight') minHeight: LayoutProps['minHeight'];
  @StyledInput() @Input('maxWidth') maxWidth: LayoutProps['maxWidth'];
  @StyledInput() @Input('maxHeight') maxHeight: LayoutProps['maxHeight'];
  @StyledInput() @Input('size') size: LayoutProps['size'];
  @StyledInput() @Input('display') display: LayoutProps['display'];
  @StyledInput() @Input('verticalAlign') verticalAlign: LayoutProps['verticalAlign'];
  @StyledInput() @Input('overflow') overflow: LayoutProps['overflow'];
  @StyledInput() @Input('overflowX') overflowX: LayoutProps['overflowX'];
  @StyledInput() @Input('overflowY') overflowY: LayoutProps['overflowY'];

  // BorderProps
  @StyledInput() @Input('border') border: BorderProps['border'];
  @StyledInput() @Input('borderTop') borderTop: BorderProps['borderTop'];
  @StyledInput() @Input('borderRight') borderRight: BorderProps['borderRight'];
  @StyledInput() @Input('borderBottom') borderBottom: BorderProps['borderBottom'];
  @StyledInput() @Input('borderLeft') borderLeft: BorderProps['borderLeft'];
  @StyledInput() @Input('borderColor') borderColor: BorderProps['borderColor'];
  @StyledInput() @Input('borderRadius') borderRadius: BorderProps['borderRadius'];
  @StyledInput() @Input('borderStyle') borderStyle: BorderProps['borderStyle'];
  @StyledInput() @Input('borderWidth') borderWidth: BorderProps['borderWidth'];
  @StyledInput() @Input('borderTopWidth') borderTopWidth: BorderProps['borderTopWidth'];
  @StyledInput() @Input('borderRightWidth') borderRightWidth: BorderProps['borderRightWidth'];
  @StyledInput() @Input('borderBottomWidth') borderBottomWidth: BorderProps['borderBottomWidth'];
  @StyledInput() @Input('borderLeftWidth') borderLeftWidth: BorderProps['borderLeftWidth'];

  // PositionProps
  @StyledInput() @Input('position') position: PositionProps['position'];

  constructor(protected themeProvider: ThemeProvider, protected element: ElementRef) {
    //
  }

  ngOnChanges(changes: SimpleChanges): void {
    const styled = this as unknown as StyledInputAnnotation;
    if (Array.isArray(styled.styledInput) === false) {
      return
    }
    Object.keys(changes).filter((change) => {
      return changes[change].firstChange === false;
    }).filter((change) => styled.styledInput.includes(change)).forEach((property: string) => {
      const current = changes[property].currentValue;
      const previous = changes[property].previousValue;
      if (current !== previous) {
        // remove previous classes
        if (previous) {
          const previousClassNames = this.themeProvider.classNames({
            [property]: previous,
          });
          if (previousClassNames.className.length > 0) {
            const previousClassName = previousClassNames.className.split(' ');
            this.element.nativeElement.classList.remove(...previousClassName);
          }
        }
        // add current classes
        const currentClassNames = this.themeProvider.classNames({
          [property]: current,
        });
        if (currentClassNames.className.length > 0) {
          const classNames = currentClassNames.className.split(' ');
          this.contentElement?.classList.add(...classNames);
        }
        const style: CSS.Properties = Object.keys(currentClassNames).filter((key) => key != 'className').reduce((acc, key) => {
            return Object.assign(acc, { [key]: currentClassNames[key] });
        }, {});
        if (this.contentElement) {
          Object.assign(this.contentElement.style, style);
        }
      }
    });
  }

  ngOnInit(): void {
    const styled = this as unknown as StyledInputAnnotation;

    this.contentElement = document.createElement(this.as);
    const { nativeElement } = this.element;
    const { parentElement } = nativeElement;

    parentElement.appendChild(this.contentElement);

    if (styled.styledInput) {
      const styledProps = styled.styledInput.filter((property: string) => {
        return styled[property] != null;
      })
      .reduce((acc, property: string) => {
        return Object.assign(acc, {
          [property]: styled[property],
        });
      }, {});
      const classNames = this.themeProvider.classNames(styledProps);
      if (classNames.className.length > 0) {
        const classList = classNames.className.split(' ');
        this.contentElement.classList.add(...classList);
      }
      const style: CSS.Properties = Object.keys(classNames).filter((key) => key != 'className').reduce((acc, key) => {
          return Object.assign(acc, { [key]: classNames[key] });
      }, {});
      Object.assign(this.contentElement.style, style);
      while (nativeElement.firstChild) {
        this.contentElement.appendChild(nativeElement.firstChild);
      }
      parentElement.removeChild(nativeElement);
    }



  }
}

