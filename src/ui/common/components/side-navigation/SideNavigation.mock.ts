export const bottomNavItemsMock = [
  {
    icon: 'bell-filled',
    activeIcon: 'bell-filled',
    text: 'Notifications',
    link: '/notifications',
    badge: 3,
  },
  {
    icon: 'support',
    activeIcon: 'support',
    text: 'Contact support',
    link: '/contact-support',
  },
];

export const navItemsMock = [
  {
    icon: 'dashboard',
    activeIcon: 'dashboard',
    text: 'Dashboard',
    link: '/',
  },
  {
    icon: 'members-outlined',
    activeIcon: 'members-filled',
    text: 'Members',
    link: '/members',
  },
  // {
  //   icon: 'event-outlined',
  //   activeIcon: 'event-outlined',
  //   text: 'Schedule',
  //   link: '/schedule',
  // },
  {
    icon: 'appointment',
    activeIcon: 'appointment',
    text: 'Appointments',
    children: [
      {
        text: 'Current',
        link: '/appointments/current',
        badge: 3,
      },
      {
        text: 'Past',
        link: '/appointments/past',
        badge: 103,
      },
      {
        text: 'Pending',
        link: '/appointments/pending',
        badge: 0,
      },
    ],
  },
  {
    icon: 'chat',
    activeIcon: 'chat',
    text: 'Chats',
    children: [
      {
        text: 'Current',
        link: '/chat/current',
      },
      {
        text: 'Past',
        link: '/chat/past',
      },
      {
        text: 'Pending',
        link: '/chat/pending',
      },
    ],
  },
];

export const dropdownItemsMock = [
  { label: 'Account', onClick: () => console.log('account clicked!') },
  { label: 'Settings', onClick: () => console.log('settings clicked!') },
  { label: 'Logout', onClick: () => console.log('logout clicked!') },
];

export const textFieldsMock = [
  {
    label: 'Reward',
    text: 'Increase my ability to concentrate',
  },
  {
    label: 'Phone number',
    text: '(239) 555-0108',
  },
  {
    label: 'Email',
    text: 'olivia@example.com',
  },
];

export const rightSideNavMock = [
  {
    text: 'General',
    children: [
      {
        text: 'General information',
        link: '/general/general-information',
      },
      {
        text: 'Care team',
        link: '/general/care-team',
      },
      {
        text: 'Chatbots',
        link: '/general/chatbots',
      },
      {
        text: 'Activity',
        link: '/general/activity',
      },
      {
        text: 'Groups',
        link: '/general/Groups',
      },
      {
        text: 'Notes',
        link: '/general/notes',
      },
    ],
  },
  {
    text: 'Appointments',
    children: [
      {
        text: 'General information',
        link: '/appointments/general-information',
      },
      {
        text: 'Care team',
        link: '/appointments/care-team',
      },
      {
        text: 'Chatbots',
        link: '/appointments/chatbots',
      },
      {
        text: 'Activity',
        link: '/appointments/activity',
      },
      {
        text: 'Groups',
        link: '/appointments/Groups',
      },
      {
        text: 'Notes',
        link: '/appointments/notes',
      },
    ],
  },
  {
    text: 'Priorities',
    children: [
      {
        text: 'General information',
        link: '/priorities/general-information',
      },
      {
        text: 'Care team',
        link: '/priorities/care-team',
      },
      {
        text: 'Chatbots',
        link: '/priorities/chatbots',
      },
      {
        text: 'Activity',
        link: '/priorities/activity',
      },
      {
        text: 'Groups',
        link: '/priorities/Groups',
      },
      {
        text: 'Notes',
        link: '/priorities/notes',
      },
    ],
  },
];
