import React from 'react';

import { BaseButton } from './BaseButton';

export default {
  title: 'Components/Buttons',
  component: BaseButton,
  args: {
    children: 'Base Button',
    onClick: () => {
      window.alert('im the base button');
    }
  }
};

const Template = args => <BaseButton {...args} />;

export const Base = Template.bind({});
