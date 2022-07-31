import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeadingText } from '../HeadingText';

export default {
  title: 'exercise1/atoms/HeadingText',
  component: HeadingText,
  parameters: {
    docs: {
      description: {
        component: '英字大見出しのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof HeadingText>;

const Template: ComponentStory<typeof HeadingText> = (args) => <HeadingText {...args} />;

export const Gorgeous = Template.bind({});
Gorgeous.decorators = [
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
Gorgeous.args = {
  children: 'Gorgeous!!!',
};
