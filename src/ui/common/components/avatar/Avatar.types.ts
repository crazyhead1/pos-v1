export enum avatarType {
  SQUARE = 'SQUARE',
  CIRCLE = 'CIRCLE',
}

export interface IAvatarProps {
  src?: string;
  name?: string;
  variant?: avatarType;
  [prop: string]: any;
}
