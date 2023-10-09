import { Avatar, avatarType } from '.';

export default {
  component: Avatar,
  title: 'atoms/Avatar',
};

const Template = args => <Avatar {...args} />;

export const Square = Template.bind({});
Square.args = {
  variant: avatarType.SQUARE,
  src: 'https://i.pravatar.cc/100?img=11',
  name: 'John Doe',
  size: 60,
};

export const Circle = Template.bind({});
Circle.args = {
  variant: avatarType.CIRCLE,
  src: 'https://i.pravatar.cc/100?img=11',
  name: 'John Doe',
  size: 60,
};

export const Initials = Template.bind({});
Initials.args = {
  variant: avatarType.CIRCLE,
  name: 'John Doe',
  size: 60,
};
