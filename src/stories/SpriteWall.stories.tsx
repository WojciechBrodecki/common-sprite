import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SpriteWall from '../components/SpriteWall';

export default {
  title: 'Example/SpriteWall',
  component: SpriteWall,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SpriteWall>;


export const Test = () => (<SpriteWall />);
