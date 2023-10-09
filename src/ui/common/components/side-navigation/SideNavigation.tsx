import React, { FC, MouseEvent, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import cx from "clsx";

// components
import { IconLink, iconLinkStyle, iconLinkType } from "../icon-link";
import { Link } from "../link";
import { Collapsable, IiconPosition } from "../collapsable";
import { Avatar, avatarType } from "../avatar";
import { fontWeight, Text, textLevel } from "../typography";
import { Badge, badgeStyle, badgeType } from "../badge";
import ButtonComponent from "../button-component";
import { btnType } from "../button-component/ButtonComponent.types";
// hooks
import { useQuery } from "../../../../utils/useQuery";

// styles
import { useStyles } from "./SideNavigation.styles";

// types
import {
  ISideNavigationProps,
  sideNavigationType,
} from "./SideNavigation.types";

const SideNavigation: FC<ISideNavigationProps> = ({
  className = "",
  navItems = [],
  bottomNavItems = [],
  dropdownItems,
  avatar,
  name = "",
  role = "",
  connectionId = "",
  setOpenDrawer,
  setOpenInstantAppointmentDrawer,
  handleSidebarToggle,
  sideBarIsActive = true,
  variant = sideNavigationType.LEFT,
  rightSidebarHeadCustom,
  custom,
  handleGoBack,
  primaryRoutes = [],
  ...rest
}) => {
  const { pathname } = useLocation();
  const queryHook = useQuery();
  const classes = useStyles({ sideBarIsActive });
  const [isPrimaryPage, setIsPrimaryPage] = useState(true);
  const [collapseLink, setCollapseLink] = useState("");
  const [showAppointmentBadge, setShowAppointmentBadge] = useState(false);

  const isActive = useCallback(
    ({
      link,
      query,
    }: {
      link: string;
      query?: { type: string; value: string };
    }) => {
      if (query) {
        return queryHook.get(query?.type) === query.value;
      }
      if (link === "/") return link === pathname;

      return pathname.startsWith(link);
    },
    [pathname, queryHook]
  );

  const onClickCollapsable = (link: string) => (e: MouseEvent) => {
    e.preventDefault();
    if (!sideBarIsActive && variant === sideNavigationType.LEFT) {
      handleSidebarToggle();
      // save the link to expand exactly the collapse component when clicking on the link
      setCollapseLink(link);
    }
  };

  useEffect(() => {
    setIsPrimaryPage(primaryRoutes.includes(pathname));
  }, [pathname]);

  // reset collapse link when left side bar is collapsed
  useEffect(() => {
    if (!sideBarIsActive && variant === sideNavigationType.LEFT) {
      setCollapseLink("");
    }
  }, [sideBarIsActive]);

  useEffect(() => {
    const appointmentObj = navItems.find(
      (item) => item.text === "Appointments"
    );
    appointmentObj?.children?.forEach((item) => {
      const hasAppointments =
        (item.text === "Current" || item.text === "Pending") &&
        Number(item.badge) > 0;
      return hasAppointments ? setShowAppointmentBadge(hasAppointments) : "";
    });
  }, [navItems]);

  return (
    <div
      className={cx({
        [classes.root]: true,
        [classes.activeBar]: sideBarIsActive,
        [classes.inactiveBar]:
          !sideBarIsActive && variant === sideNavigationType.LEFT,
        [className || ""]: className,
      })}
      {...rest}
    >
      {custom || (
        <>
          <div className={classes.topPanel}>
            {variant === sideNavigationType.RIGHT && (
              <div
                className={cx({
                  [classes.userCard]: true,
                  [classes.borderBottom]: true,
                  [classes.rightSideUserCard]: true,
                })}
              >
                {rightSidebarHeadCustom || (
                  <div className={classes.userWrapper}>
                    <Avatar
                      size={40}
                      variant={avatarType.CIRCLE}
                      src={avatar}
                      name={name}
                    />
                    {sideBarIsActive && (
                      <div>
                        <Text
                          className={classes.userNameText}
                          weight={fontWeight.SEMI_BOLD}
                          level={textLevel.S}
                        >
                          {name}
                        </Text>
                        <Text
                          className={classes.userInfoText}
                          weight={fontWeight.MEDIUM}
                          level={textLevel.S}
                        >
                          {role}
                        </Text>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {variant === sideNavigationType.LEFT && (
              <div className={classes.logoAndTogglerWrapper}>
                {(sideBarIsActive || isPrimaryPage) && <h3>logo</h3>}
                {sideBarIsActive ? (
                  <>
                    <ButtonComponent
                      variant={btnType.TEXT}
                      className={classes.sideBarToggler}
                      onClick={handleSidebarToggle}
                    >
                      <i className={`bx bx-chevron-right`}></i>
                    </ButtonComponent>
                  </>
                ) : (
                  <>
                    {!isPrimaryPage && (
                      <ButtonComponent
                        variant={btnType.PRIMARY}
                        className={classes.sideBarActiveBtn}
                        onClick={handleGoBack}
                      >
                        <i className={`bx bx-chevron-left`}></i>
                      </ButtonComponent>
                    )}
                  </>
                )}
              </div>
            )}
            {navItems?.length > 0 && (
              <div
                className={cx({
                  [classes.navItems]: true,
                  [classes.rightSideNavItems]:
                    variant === sideNavigationType.RIGHT,
                })}
              >
                {navItems.map(
                  (
                    {
                      icon,
                      activeIcon,
                      text,
                      link,
                      children,
                      classIcon,
                      query,
                      badge,
                      section,
                    },
                    idx
                  ) => {
                    const isChildActive =
                      variant === sideNavigationType.RIGHT ||
                      children?.some((item) =>
                        isActive({ link: item.link, query: item.query })
                      );
                    const active =
                      isActive({ link, query }) ||
                      (!sideBarIsActive && isChildActive);
                    return children ? (
                      <Collapsable
                        key={idx}
                        active={active}
                        iconHidden={!sideBarIsActive}
                        open={
                          // this is cheat to collapse the menu when sidebar is collapsed
                          // eslint-disable-next-line no-nested-ternary
                          variant === sideNavigationType.LEFT
                            ? sideBarIsActive
                              ? isChildActive || collapseLink === link || ""
                              : false
                            : isChildActive
                        }
                        label={
                          <IconLink
                            className={cx({
                              [classes.navItem]: !active,
                              [classes.navActiveItem]: active,
                              [classes.navNoIconItem]: !icon,
                              [classIcon]: !!classIcon,
                            })}
                            variant={iconLinkType.SELF}
                            style={iconLinkStyle.PRIMARY}
                            href={link}
                            icon={active ? activeIcon : icon}
                            onClick={onClickCollapsable(link)}
                          >
                            {sideBarIsActive && (
                              <span
                                className={cx({
                                  [classes.navText]: true,
                                  [classes.navActiveText]: active,
                                })}
                              >
                                {text}
                                <span
                                  className={cx({
                                    [classes.dot]:
                                      showAppointmentBadge &&
                                      text === "Appointments",
                                  })}
                                />
                              </span>
                            )}
                          </IconLink>
                        }
                        iconPosition={IiconPosition.RIGHT}
                      >
                        <div className={classes.subNavItems}>
                          {children.map((subItem) => {
                            const activeSubNav = isActive({
                              link: subItem.link,
                              query: subItem?.query,
                            });
                            return (
                              <Link
                                className={cx({
                                  [classes.navItem]: !activeSubNav,
                                  [classes.navActiveItem]: activeSubNav,
                                  [classes.navNoIconItem]: true,
                                  [classes.disableNavItem]: subItem.disabled,
                                })}
                                key={subItem.text}
                                href={
                                  subItem?.query
                                    ? `${pathname}${subItem.link ?? ""}?${
                                        subItem.query.type
                                      }=${subItem.query.value}${
                                        subItem.section
                                          ? `#${subItem.section}`
                                          : ""
                                      }`
                                    : subItem.link
                                }
                                onClick={() => {
                                  if (subItem.section) {
                                    const s = document.querySelector(
                                      `section[id="${subItem.section}"]`
                                    );
                                    if (s) {
                                      s.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                      });
                                    }
                                  }
                                }}
                              >
                                <span
                                  className={cx({
                                    [classes.navText]: true,
                                    [classes.navActiveText]: activeSubNav,
                                    [classes.subNavText]: true,
                                  })}
                                >
                                  {subItem.text}
                                </span>
                                {Number(subItem.badge) >= 0 &&
                                  Number(subItem.badge) <= 999 && (
                                    <Badge
                                      className={cx({
                                        [classes.childBadgeAppoint]:
                                          variant === sideNavigationType.LEFT,
                                        [classes.badgeActiveAppoint]:
                                          activeSubNav &&
                                          variant === sideNavigationType.LEFT,
                                        [classes.childBadge]:
                                          variant ===
                                            sideNavigationType.RIGHT &&
                                          Number(subItem.badge) > 0,
                                        [classes.childBadgeZero]:
                                          variant ===
                                            sideNavigationType.RIGHT &&
                                          Number(subItem.badge) === 0,
                                        [classes.badgeActive]:
                                          activeSubNav &&
                                          variant ===
                                            sideNavigationType.RIGHT &&
                                          Number(subItem.badge) > 0,
                                      })}
                                    >
                                      {subItem.badge}
                                    </Badge>
                                  )}
                                {Number(subItem.badge) > 999 && (
                                  <Badge
                                    className={cx({
                                      [classes.childBadgeAppoint]:
                                        variant === sideNavigationType.LEFT,
                                      [classes.badgeActiveAppoint]:
                                        activeSubNav &&
                                        variant === sideNavigationType.LEFT,
                                      [classes.childBadge]:
                                        variant === sideNavigationType.RIGHT,
                                      [classes.badgeActive]:
                                        activeSubNav &&
                                        variant === sideNavigationType.RIGHT,
                                    })}
                                  >
                                    999+
                                  </Badge>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </Collapsable>
                    ) : (
                      <div
                        key={idx}
                        className={
                          active ? classes.navActiveItem : classes.navItem
                        }
                      >
                        <IconLink
                          variant={iconLinkType.SELF}
                          style={iconLinkStyle.PRIMARY}
                          href={
                            query
                              ? `${pathname}?${query.type}=${query.value}${
                                  section ? `#${section}` : ""
                                }`
                              : link
                          }
                          icon={active ? activeIcon : icon}
                          className={classes.linkBadge}
                          onClick={() => {
                            if (section) {
                              const s = document.querySelector(
                                `section[id="${section}"]`
                              );
                              if (s) {
                                s.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                            }
                          }}
                        >
                          <div className={classes.linkBadge}>
                            {sideBarIsActive && (
                              <span
                                className={cx({
                                  [classes.navText]: true,
                                  [classes.navActiveText]: active,
                                })}
                              >
                                {text}
                              </span>
                            )}
                            {badge > 0 && (
                              <Badge
                                className={cx(
                                  classes.childBadge,
                                  classes.childBadge2,
                                  {
                                    [classes.badgeActive]: active,
                                  }
                                )}
                              >
                                {badge}
                              </Badge>
                            )}
                          </div>
                        </IconLink>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
          <div className={classes.bottomPanel}>
            {bottomNavItems?.length > 0 && (
              <div
                className={cx({
                  [classes.navItems]: true,
                  [classes.rightSideNavItems]:
                    variant === sideNavigationType.RIGHT,
                })}
              >
                {bottomNavItems.map(
                  ({ icon, activeIcon, text, link, badge }, idx) => {
                    const active = isActive({ link });
                    return (
                      <div
                        key={idx}
                        className={
                          active ? classes.navActiveItem : classes.navItem
                        }
                      >
                        <IconLink
                          variant={iconLinkType.SELF}
                          style={iconLinkStyle.PRIMARY}
                          href={link}
                          icon={active ? activeIcon : icon}
                          className={classes.bottomNavItem}
                        >
                          {sideBarIsActive && (
                            <div className={classes.bottomNavItemWrapper}>
                              <span
                                className={cx({
                                  [classes.navText]: true,
                                  [classes.navActiveText]: active,
                                })}
                              >
                                {text}
                              </span>
                              {badge && (
                                <Badge
                                  variant={badgeType.FILLED}
                                  style={badgeStyle.LOW}
                                  className={classes.badge}
                                >
                                  {badge} new
                                </Badge>
                              )}
                            </div>
                          )}
                          {!sideBarIsActive && badge && (
                            <span className={classes.badgeText}>{badge}</span>
                          )}
                        </IconLink>
                      </div>
                    );
                  }
                )}
              </div>
            )}
            {variant === sideNavigationType.LEFT && (
              <div
                className={cx({
                  [classes.userCard]: true,
                  [classes.borderTop]: true,
                })}
              >
                {/* <Menu items={dropdownItems} className={classes.menu}>
                  <div className={classes.userWrapper}>
                    <Avatar
                      size={40}
                      variant={avatarType.CIRCLE}
                      src={avatar}
                      name={name}
                    />
                    {sideBarIsActive && (
                      <div>
                        <Text
                          className={classes.userNameText}
                          weight={fontWeight.SEMI_BOLD}
                          level={textLevel.S}
                        >
                          {name}
                        </Text>
                        <Text
                          className={classes.userInfoText}
                          weight={fontWeight.MEDIUM}
                          level={textLevel.S}
                        >
                          {role}
                        </Text>
                      </div>
                    )}
                  </div>
                  {sideBarIsActive && dropdownItems && (
                    <div className={classes.menuArrowWrapper}>
                    </div>
                  )}
                </Menu> */}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export { SideNavigation };
