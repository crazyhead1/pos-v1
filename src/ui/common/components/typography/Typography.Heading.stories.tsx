import { Heading, headingLevel, fontWeight } from '.';

export default {
  title: 'atoms/Typography/Heading',
  component: Heading,
};

const Template = args => <Heading {...args} />;

export const Jumbo = Template.bind({});
Jumbo.args = {
  level: headingLevel.XL,
  weight: fontWeight.LIGHT,
  children: 'Jumbo',
};

export const HeadlineL = Template.bind({});
HeadlineL.args = {
  level: headingLevel.L,
  weight: fontWeight.BOLD,
  children: 'Headline L',
};

export const HeadlineM = Template.bind({});
HeadlineM.args = {
  level: headingLevel.M,
  weight: fontWeight.BOLD,
  children: 'Headline M',
};

export const HeadlineS = Template.bind({});
HeadlineS.args = {
  level: headingLevel.S,
  weight: fontWeight.BOLD,
  children: 'Headline S',
};
