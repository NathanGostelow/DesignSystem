import React from 'react';

import { SecondaryButton } from './SecondaryButton';

export default {
  title: 'Components/Buttons',
  component: SecondaryButton,
  args: {
    children: 'Secondary Button',
    onClick: () => {
      window.alert('im the Secondary button');
    }
  }
};

const Template = args => <SecondaryButton {...args} />;

export const Secondary = Template.bind({});
