import { ReactNode } from 'react';

export interface ICollapsableProps {
  className?: string;
  title?: string;
  children?: ReactNode | ReactNode[];
  labelExtend?: ReactNode;
  iconPosition?: IiconPosition;
  active?: boolean;
  open?: boolean | ''; // type '' is cheat for collapsing menu on left sidebar
  headerHidden?: boolean;
  iconHidden?: boolean;
  action?: ReactNode;
  [prop: string]: any;
}

export enum IiconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}
