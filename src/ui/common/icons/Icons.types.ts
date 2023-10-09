// types
import { IGlyphs } from './glyphs';

export interface IIconsProps {
  className?: string;
  color?: string;
  glyph?: IGlyphs['glyph'];
  onClick?: (...args: any[]) => any;
}
