import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputTags } from './inputTags';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'InputTags',
  component: InputTags,
} as ComponentMeta<typeof InputTags>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputTags> = (args) => <InputTags {...args}/>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const setTags = (tags) => {
  Default.args.tags = tags;
};
Default.args = {
  tags: [],
  setTags: setTags
};