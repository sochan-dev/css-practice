import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../Button';

export default {
  title: 'exercise3/atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'ボタンのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const button = Template.bind({});
button.decorators = [
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

button.args = {
  label: '送信する',
};
