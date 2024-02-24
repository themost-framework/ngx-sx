import { SpaceProps, BackgroundProps, BorderProps, ColorProps, ButtonStyleProps, TextStyleProps } from 'styled-system';
// import { SystemStyleObject } from '@styled-system/css';

export declare type SystemClassNameProps = TextStyleProps & SpaceProps & BackgroundProps & BorderProps & ColorProps & ButtonStyleProps;

declare module "system-classnames/primer" {
    export default function classNames(sx: SystemClassNameProps): {
        [k: string]: string;
        className: string;
    };
}