import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Background } from '../Background';

export default {
  title: 'exercise2/atoms/Background',
  component: Background,
  parameters: {
    docs: {
      description: {
        component: '画像コンポーネント',
      },
    },
  },
} as ComponentMeta<typeof Background>;

const Template: ComponentStory<typeof Background> = (args) => <Background {...args} />;

export const background = Template.bind({});
background.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Story />
    </div>
  ),
];

background.args = {
  src: '/img/ph_service03.jpg',
};
