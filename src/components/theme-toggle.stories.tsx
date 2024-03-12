import type { Meta, StoryObj } from '@storybook/react';
import { ModeToggle } from './theme-toggle';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ModeToggle> = {
  component: ModeToggle,
};

export default meta;
type Story = StoryObj<typeof ModeToggle>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};