import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './search';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Search> = {
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};