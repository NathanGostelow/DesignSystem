import React from 'react';

import { GhostButton } from './GhostButton';

export default {
  title: 'Components/Buttons',
  component: GhostButton,
  args: {
    children: 'Ghost Button',
    onClick: () => {
      window.alert('im the Ghost button');
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

const Template = args => <GhostButton {...args} />;

export const Ghost = Template.bind({});
