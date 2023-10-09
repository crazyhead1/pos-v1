import React from "react";
import { ITextFieldProps } from "../../atoms/text-field";
import { IGlyphs } from "../../../icons";

export type INavItemType = {
  icon?: IGlyphs["glyph"];
  classIcon?: string;
  activeIcon?: IGlyphs["glyph"];
  text: string;
  link?: string;
  query?: { type: string; value: string };
  children?: INavSubItemType[];
  badge?: number;
  section?: string;
};

export type INavSubItemType = {
  text: string;
  link?: string;
  disabled?: boolean;
  query?: { type: string; value: string };
  badge?: string | number;
  section?: string;
};

export interface ISideNavigationProps {
  className?: string;
  navItems?: INavItemType[];
  bottomNavItems?: INavItemType[];
  dropdownItems?: { label?: string; onClick?: (...args) => void }[];
  avatar?: string;
  name?: string;
  role?: string;
  variant?: sideNavigationType;
  sideBarIsActive: boolean;
  handleSidebarToggle: () => void;
  handleGoBack?: () => void;
  custom?: React.ReactNode;
  rightSidebarHeadCustom?: React.ReactNode;
  primaryRoutes?: string[];
  [prop: string]: any;
  connectionId?: string;
  setOpenDrawer?: (value: boolean) => void;
  setOpenInstantAppointmentDrawer?: (value: boolean) => void;
}

export enum sideNavigationType {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
