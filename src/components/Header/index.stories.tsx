import React from 'react';
import { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Header } from '.';

export default { component: Header } as ComponentMeta<typeof Header>;

export const Playground: ComponentStoryObj<typeof Header> = {
  args:{
    user: {
      name: 'Jane Doe',
    },
  }
}
