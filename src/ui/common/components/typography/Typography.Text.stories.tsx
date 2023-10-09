import { Text, textLevel, fontWeight } from '.';

export default {
  component: Text,
  title: 'atoms/Typography/Text',
};

const Template = args => <Text {...args} />;

export const BodyXL = Template.bind({});
BodyXL.args = {
  level: textLevel.XL,
  weight: fontWeight.REGULAR,
  children: 'Body XL',
};
BodyXL.storyName = 'Body XL';

export const BodyL = Template.bind({});
BodyL.args = {
  level: textLevel.L,
  weight: fontWeight.REGULAR,
  children: 'Body L',
};
BodyXL.BodyL = 'Body L';

export const BodyMBold = Template.bind({});
BodyMBold.args = {
  level: textLevel.L,
  weight: fontWeight.BOLD,
  children: 'Body M Bold',
};
BodyMBold.storyName = 'Body M Bold';

export const BodyMSemibold = Template.bind({});
BodyMSemibold.args = {
  level: textLevel.L,
  weight: fontWeight.SEMI_BOLD,
  children: 'Body M SemiBold',
};
BodyMBold.storyName = 'Body M SemiBold';

export const BodyMMedium = Template.bind({});
BodyMMedium.args = {
  level: textLevel.L,
  weight: fontWeight.MEDIUM,
  children: 'Body M Medium',
};
BodyMMedium.storyName = 'Body M Medium';

export const BodyMRegular = Template.bind({});
BodyMRegular.args = {
  level: textLevel.L,
  weight: fontWeight.REGULAR,
  children: 'Body M Regular',
};
BodyMRegular.storyName = 'Body M Regular';

export const BodySBold = Template.bind({});
BodySBold.args = {
  level: textLevel.L,
  weight: fontWeight.BOLD,
  children: 'Body S Bold',
};
BodySBold.storyName = 'Body S Bold';

export const BodySSemibold = Template.bind({});
BodySSemibold.args = {
  level: textLevel.M,
  weight: fontWeight.SEMI_BOLD,
  children: 'Body S SemiBold',
};
BodySSemibold.storyName = 'Body S SemiBold';

export const BodySMedium = Template.bind({});
BodySMedium.args = {
  level: textLevel.M,
  weight: fontWeight.MEDIUM,
  children: 'Body S Medium',
};
BodySMedium.storyName = 'Body S Medium';

export const BodySRegular = Template.bind({});
BodySRegular.args = {
  level: textLevel.M,
  weight: fontWeight.REGULAR,
  children: 'Body S Regular',
};
BodySRegular.storyName = 'Body S Regular';

export const BodyXS = Template.bind({});
BodyXS.args = {
  level: textLevel.S,
  weight: fontWeight.SEMI_BOLD,
  children: 'Body XS',
};
BodyXS.storyName = 'Body XS';

export const Overline = Template.bind({});
Overline.args = {
  level: textLevel.S,
  weight: fontWeight.EXTRA_BOLD,
  children: 'Overline',
};
Overline.storyName = 'Overline';
