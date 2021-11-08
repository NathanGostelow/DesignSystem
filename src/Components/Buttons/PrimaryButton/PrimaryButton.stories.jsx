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
  },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/aDR5N00e6a4IIyltUeMjcN/Untitled?node-id=2%3A11'
    }
  }
};

const Template = args => <PrimaryButton {...args} />;

export const Primary = Template.bind({});
