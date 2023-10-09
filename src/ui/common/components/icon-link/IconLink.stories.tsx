import { MemoryRouter } from 'react-router';

// mui
import Stack from '@mui/material/Stack';

// components
import { IconLink, iconLinkStyle, iconLinkPosition, iconLinkType } from '.';

export default {
  component: IconLink,
  title: 'molecules/IconLink',
};

export const Default = () => (
  <MemoryRouter>
    <Stack spacing={1} alignItems="flex-start">
      <IconLink
        variant={iconLinkType.SELF}
        style={iconLinkStyle.PRIMARY}
        icon="dashboard-outlined"
        iconPosition={iconLinkPosition.LEFT}
      >
        Dashboard
      </IconLink>
      <IconLink
        variant={iconLinkType.SELF}
        style={iconLinkStyle.SECONDARY}
        icon="conversations-outlined"
        iconPosition={iconLinkPosition.LEFT}
      >
        Conversations
      </IconLink>
      <IconLink
        variant={iconLinkType.SELF}
        style={iconLinkStyle.SUCCESS}
        icon="data-management-outlined"
        iconPosition={iconLinkPosition.LEFT}
      >
        Data management
      </IconLink>
      <IconLink
        variant={iconLinkType.SELF}
        style={iconLinkStyle.ERROR}
        icon="chart-filled"
        iconPosition={iconLinkPosition.LEFT}
      >
        Reports
      </IconLink>
      <IconLink
        variant={iconLinkType.SELF}
        style={iconLinkStyle.HIGH_CONTRAST}
        icon="chat-filled"
        iconPosition={iconLinkPosition.LEFT}
      >
        Charts
      </IconLink>
    </Stack>
  </MemoryRouter>
);
