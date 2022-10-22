import React from 'react';
import { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Button } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default { component: Button } as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Playground: ComponentStoryObj<typeof Button> = {
  args:{
    appearance: 'flat',
    size: 'small',
    label: 'Button',
  }
}
