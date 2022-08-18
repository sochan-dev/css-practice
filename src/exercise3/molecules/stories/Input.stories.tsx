import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '../Input';

export default {
  title: 'exercise3/molecules/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'inputのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const input = Template.bind({});
input.decorators = [
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

input.args = {
  attribute: { type: 'text', placeholder: '山田' },
  isError: false,
  errorMsg: 'カタカナで姓を入力してください。',
  annotation: 'カタカナのみ',
};

export const error = Template.bind({});
error.decorators = [
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

error.args = {
  attribute: { type: 'text', placeholder: '山田' },
  isError: true,
  errorMsg: 'カタカナで姓を入力してください。',
  annotation: 'カタカナのみ',
};
