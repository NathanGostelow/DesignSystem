import React from 'react';

import { FavouriteButton } from './FavouriteButton';

export default {
  title: 'Components/Buttons',
  component: FavouriteButton,
  args: {
    children: 'Favourite Button',
    favourited: false
  }
};

const Template = args => <FavouriteButton {...args} />;

export const Favourite = Template.bind({});
