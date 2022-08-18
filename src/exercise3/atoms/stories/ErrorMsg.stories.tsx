import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ErrorMsg } from '../ErrorMsg';

export default {
  title: 'exercise3/atoms/ErrorMsg',
  component: ErrorMsg,
  parameters: {
    docs: {
      description: {
        component: 'エラー文・警告文のコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof ErrorMsg>;

const Template: ComponentStory<typeof ErrorMsg> = (args) => <ErrorMsg {...args} />;

export const errorMsg = Template.bind({});
errorMsg.decorators = [
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

errorMsg.args = {
  msg: 'フリガナの姓を入力してください。',
};
