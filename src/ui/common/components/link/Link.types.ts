import { ReactNode } from 'react';

export type underlineType = 'always' | 'hover' | 'none';

export enum linkType {
  SELF = 'self',
  BLANK = 'blank',
  CALLBACK = 'callback',
}

export interface ILinkProps {
  className?: string;
  variant?: linkType;
  href?: string;
  underline?: underlineType;
  children?: ReactNode;
  onClick?: (...args: any[]) => any;
  [prop: string]: any;
}
