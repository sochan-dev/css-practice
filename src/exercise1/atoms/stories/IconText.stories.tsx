import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconText } from '../IconText';

export default {
  title: 'exercise1/atoms/IconText',
  component: IconText,
  parameters: {
    docs: {
      description: {
        component: '英字大見出しのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof IconText>;

const Template: ComponentStory<typeof IconText> = (args) => <IconText {...args} />;

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
