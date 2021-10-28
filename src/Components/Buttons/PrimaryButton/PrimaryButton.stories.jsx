import React from 'react';

import { PrimaryButton } from './PrimaryButton';

export default {
  title: 'Components/Buttons',
  component: PrimaryButton,
  args: {
    children: 'Primary Button',
    onClick: () => {
      window.alert('im the Primary button');
    }
  }
};

const Template = args => <PrimaryButton {...args} />;

export const Primary = Template.bind({});
