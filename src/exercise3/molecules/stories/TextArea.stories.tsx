import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextArea } from '../TextArea';

export default {
  title: 'exercise3/molecules/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: 'TextAreaのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const textArea = Template.bind({});
textArea.decorators = [
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

textArea.args = {
  attribute: {},
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
  attribute: {},
  isError: true,
  errorMsg: 'カタカナで姓を入力してください。',
  annotation: 'カタカナのみ',
};
