import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SimpleTextArea } from '../SimpleTextArea';

export default {
  title: 'exercise3/atoms/SimpleTextArea',
  component: SimpleTextArea,
  parameters: {
    docs: {
      description: {
        component: 'textAreaのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof SimpleTextArea>;

const Template: ComponentStory<typeof SimpleTextArea> = (args) => <SimpleTextArea {...args} />;

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

textArea.args = {};
