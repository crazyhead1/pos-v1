import { createUseStyles } from "react-jss";
import { getComponentColors } from "../../themes/color-grads";

// Type
interface StyleProps {
  sideBarIsActive: boolean;
}
const colors = getComponentColors();
export const useStyles = createUseStyles({
  root: {
    height: "100%",
    width: 280,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: colors.PRIMARY.TEXT_COLOR,
    transition: "0.25s",
    borderLeft: `1px solid ${colors.PRIMARY.OUTLINE}`,
    borderRight: `1px solid ${colors.PRIMARY.OUTLINE}`,
  },
  activeBar: {
    width: 280,
  },
  inactiveBar: {
    width: 72,
  },
  topPanel: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  logo: {
    width: 40,
    height: 40,
    cursor: "pointer",
  },
  navItems: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    padding: "0 12px",
  },
  rightSideNavItems: {
    padding: "20px 16px !important",
  },
  subNavItems: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    padding: 0,
    paddingLeft: 16,
  },
  navNoIconItem: {
    padding: "14px 16px !important",
    justifyContent: "space-between !important",
  },
  disableNavItem: {
    cursor: "default",
    "& $navText": {
      textDecorationLine: "line-through",
    },
  },
  childBadgeZero: {
    borderRadius: 100,
    backgroundColor: colors.DISABLED.BACKGROUND,
    color: colors.DISABLED.TEXT_COLOR,
    fontSize: 12,
    borderColor: "transparent",
    fontWeight: 600,
  },
  childBadge: {
    borderRadius: 100,
    backgroundColor: colors.DISABLED.BACKGROUND,
    color: colors.DISABLED.TEXT_COLOR,
    fontSize: 12,
    borderColor: "transparent",
    fontWeight: 600,
  },
  dot: {
    height: 7,
    width: 7,
    backgroundColor: colors.DISABLED.BACKGROUND,
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: 5,
    marginBottom: 5,
  },
  badgeActive: {
    backgroundColor: colors.DISABLED.BACKGROUND,
  },
  childBadgeAppoint: {
    borderRadius: 100,
    backgroundColor: colors.DISABLED.BACKGROUND,
    color: colors.DISABLED.TEXT_COLOR,
    fontSize: 12,
    borderColor: "transparent",
    fontWeight: 600,
    height: 21,
    width: 29,
  },
  badgeActiveAppoint: {
    backgroundColor: colors.DISABLED.BACKGROUND,
  },
  navActiveItem: ({ sideBarIsActive }: StyleProps) => ({
    padding: 12,
    minHeight: 48,
    backgroundColor: colors.DISABLED.OUTLINE_BACKGROUND,
    justifyContent: sideBarIsActive ? "flex-start" : "center",
    alignItems: "center !important",
    display: "flex !important",
    flexDirection: "row",
    "& > svg, & > * > svg": {
      minHeight: 24,
      minWidth: 24,
    },
  }),
  navItem: ({ sideBarIsActive }: StyleProps) => ({
    padding: 12,
    minHeight: 48,
    justifyContent: sideBarIsActive ? "flex-start" : "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    "& > svg, & > * > svg": {
      minHeight: 24,
      minWidth: 24,
    },
  }),
  linkBadge: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  childBadge2: {
    height: 20,
  },
  bottomPanel: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  welcomeText: {
    marginRight: 4,
  },
  userNameText: {
    display: "block",
    lineHeight: "20px",
    color: colors.DISABLED.TEXT_COLOR,
    textAlign: "left",
  },
  userInfoText: {
    display: "block",
    lineHeight: "20px",
    color: colors.DISABLED.TEXT_COLOR,
    textAlign: "left",
  },
  menuArrowWrapper: {
    transform: "rotate(-90deg)",
    paddingRight: 5,
    position: "absolute",
    right: -2,
    "& svg path": {
      fill: colors.DISABLED.OUTLINE_BACKGROUND,
    },
  },
  userCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "20px 16px",
    position: "relative",
  },
  rightSideUserCard: {
    padding: "24px !important",
    maxHeight: 88,
  },
  borderTop: {
    borderTop: `1px solid ${colors.DISABLED.OUTLINE_BACKGROUND}`,
    borderColor: colors.DISABLED.OUTLINE_BACKGROUND,
  },
  borderBottom: {
    borderBottom: `1px solid ${colors.DISABLED.OUTLINE_BACKGROUND}`,
  },
  userWrapper: {
    display: "flex  ",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 12,
    position: "relative",
  },
  menu: {
    padding: 0,
    width: "100%",
  },
  navActiveText: {
    color: `${colors.DISABLED.TEXT_COLOR} !important`,
  },
  navText: {
    color: colors.DISABLED.TEXT_COLOR,
    whiteSpace: "break-spaces",
    fontWeight: 700,
    overflowX: "auto",
  },
  subNavText: {
    fontWeight: 500,
  },
  sideBarToggler: {
    height: 40,
    minWidth: 40,
    maxWidth: 40,
    borderRadius: 99,
    padding: "0px !important",
    border: `1px solid ${colors.DISABLED.OUTLINE_BACKGROUND}`,
    color: colors.DISABLED.TEXT_COLOR,
  },
  togglerIcon: {
    width: 24,
    height: 24,
  },
  sideBarActiveBtn: {
    minWidth: "40px !important",
    width: 40,
    height: 40,
    padding: "0px !important",
    "& > svg , & > * > svg": { padding: 0 },
  },
  logoAndTogglerWrapper: ({ sideBarIsActive }: StyleProps) => ({
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: sideBarIsActive ? "space-between" : "center",
    padding: "0 16px",
    height: 88,
  }),
  bottomNavItemWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  badge: {
    color: colors.SECONDARY.BACKGROUND,
    backgroundColor: "#FFF1F8",
    height: 22,
    fontSize: 12,
    borderRadius: 99,
    paddingLeft: 8,
    paddingRight: 8,
    border: "none",
  },
  badgeText: {
    fontSize: 12,
    lineHeight: "20px",
    position: "absolute",
    color: colors.SECONDARY.BACKGROUND,
    top: -12,
    right: -2,
  },
  textFieldsWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: 24,
    paddingBottom: 23,
    gap: 16,
  },
  bottomNavItem: {
    color: colors.DISABLED.OUTLINE_BACKGROUND,
    position: "relative",
  },
  btn: {
    height: 40,
    minWidth: "40px !important",
    width: 40,
    background: "#F1F8FF",
    padding: 10,
    borderRadius: 5,
  },
});
