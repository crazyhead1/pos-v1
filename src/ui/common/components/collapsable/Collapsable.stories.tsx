import { Collapsable, IiconPosition } from '.';

export default {
  component: Collapsable,
  title: 'atoms/Collapsable',
};

const Template = args => <Collapsable {...args} />;

export const Left = Template.bind({});
Left.args = {
  label: 'Feelings',
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
      Mauris aliquam sem eget libero egestas, ut dignissim nunc <br />
      vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing <br />
      elit. Mauris aliquam sem eget libero egestas, ut dignissim <br />
      nunc vehicula.
    </>
  ),
};

export const Right = Template.bind({});
Right.args = {
  label: 'Feelings',
  iconPosition: IiconPosition.RIGHT,
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
      Mauris aliquam sem eget libero egestas, ut dignissim nunc <br />
      vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing <br />
      elit. Mauris aliquam sem eget libero egestas, ut dignissim <br />
      nunc vehicula.
    </>
  ),
};
