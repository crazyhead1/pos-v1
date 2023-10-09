import { ReactNode } from "react";
import { IGlyphs } from "../../icons";

export enum badgeType {
  FILLED = "FILLED",
  OUTLINED = "OUTLINED",
  ICON = "ICON",
}

export enum badgeStyle {
  PRIMARY = "PRIMARY",
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
  MISREPORTED = "MISREPORTED",
  RESOLVED = "RESOLVED",
  UNRELATED = "UNRELATED",
  POSITIVE = "POSITIVE",
  SUCCESS = "SUCCESS",
  GREEN = "GREEN",
  PURPLE = "PURPLE",
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DARK = "DARK",
}

export enum badgeSize {
  SMALL = 28,
  MEDIUM = 48,
  LARGE = 56,
}

export interface IBadgeProps {
  className?: string;
  variant?: badgeType;
  size?: badgeSize;
  style?: badgeStyle;
  icon?: IGlyphs["glyph"];
  children?: ReactNode;
}
