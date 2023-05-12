import React from 'react';
import AppBar from './AppBar';

export default {
  title: 'Example/AppBar',
  component: AppBar,
};

const Template = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // ...
};