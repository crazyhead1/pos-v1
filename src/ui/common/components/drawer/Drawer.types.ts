import React from 'react';

export interface IDrawerProps {
  children: React.ReactNode;
  className?: string;
  paperClassName?: string;
  position?: drawerPosition;
  variant?: drawerType;
  open: boolean;
  subtitleComponent?: React.ReactNode;
  disableSubmit?: boolean;
  onClose: () => void;
  title?: string;
  titleIconComponent?: React.ReactNode;
  subTitle?: string;
  submitBtnTitle?: string;
  onSubmit?: () => void;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  narrowHeader?: boolean;
  gapLessRow?: boolean;
  headTitleSmall?: boolean;
}

export enum drawerPosition {
  TOP = 'top',
  LEFT = 'left',
  BOTTOM = 'bottom',
  RIGHT = 'right',
}
export enum drawerType {
  NORMAL = 'NORMAL',
  FORM = 'FORM',
}
