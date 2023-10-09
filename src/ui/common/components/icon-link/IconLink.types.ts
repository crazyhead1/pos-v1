// types
import { IGlyphs } from '../../../icons';
import { ILinkProps, linkType } from '../../atoms/link';

export const iconLinkType = linkType;

export enum iconLinkStyle {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  HIGH_CONTRAST = 'HIGH_CONTRAST',
  MEDIUM_CONTRAST = 'MEDIUM_CONTRAST',
  LOW_CONTRAST = 'LOW_CONTRAST',
  NEUTRAL_700 = 'NEUTRAL_700',
}

export enum iconLinkPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface IIconLinkProps extends ILinkProps {
  className?: string;
  icon?: IGlyphs['glyph'];
  style?: iconLinkStyle;
  textStyle?: iconLinkStyle;
  iconPosition?: iconLinkPosition;
}
