import { MemoryRouter } from 'react-router-dom';
import cx from 'clsx';
// mui
import { makeStyles } from '@mui/styles';

// colors
import { colors } from '../../../colors';
// components
import { SideNavigation } from '.';

// mock
import {
  rightSideNavMock,
  bottomNavItemsMock,
  navItemsMock,
  dropdownItemsMock,
  textFieldsMock,
} from './SideNavigation.mock';

// types
import { sideNavigationType } from './SideNavigation.types';

export default {
  component: SideNavigation,
  title: 'templates/SideNavigation',
};

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: colors.neutral300,
    display: 'flex',
  },
  positionRight: {
    justifyContent: 'flex-end',
  },
});

const Template = args => {
  const classes = useStyles();
  const { variant } = args;

  return (
    <MemoryRouter>
      <div
        className={cx({
          [classes.container]: true,
          [classes.positionRight]: variant === sideNavigationType.RIGHT,
        })}
      >
        <SideNavigation {...args} />
      </div>
    </MemoryRouter>
  );
};

export const Default = Template.bind({});

Default.args = {
  navItems: navItemsMock,
  bottomNavItems: bottomNavItemsMock,
  dropdownItems: dropdownItemsMock,
  name: 'Jonathan',
  sideBarIsActive: true,
};

export const RightSide = Template.bind({});

RightSide.args = {
  navItems: rightSideNavMock,
  name: 'Jonathan',
  sideBarIsActive: true,
  variant: sideNavigationType.RIGHT,
  textFields: textFieldsMock,
};
