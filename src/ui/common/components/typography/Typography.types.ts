import { ReactNode } from 'react';

export enum headingLevel {
  XL = 'XL',
  L = 'L',
  M = 'M',
  S = 'S',
}

export enum textLevel {
  XL = 'XL',
  L = 'L',
  M = 'M',
  S = 'S',
  XS = 'XS',
}

export enum fontWeight {
  LIGHT = '300',
  REGULAR = '400',
  MEDIUM = '500',
  SEMI_BOLD = '600',
  BOLD = 'bold',
  EXTRA_BOLD = '800',
}

export interface IHeadingProps {
  className?: string;
  color?: string;
  level?: headingLevel;
  weight?: fontWeight;
  children?: ReactNode;
  [prop: string]: any;
}

export interface ITextProps {
  className?: string;
  color?: string;
  level?: textLevel;
  size?: number | string;
  weight?: fontWeight;
  children?: ReactNode;
  [prop: string]: any;
}

export interface ITextErrorProps {
  className?: string;
  errorMsg?: string;
}
