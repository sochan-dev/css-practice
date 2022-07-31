import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from '../Header';

export default {
  title: 'exercise1/organisms/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Headerコンポーネント。',
      },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const header = Template.bind({});
