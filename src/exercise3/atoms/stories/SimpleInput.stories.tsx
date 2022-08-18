import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SimpleInput } from '../SimpleInput';

export default {
  title: 'exercise3/atoms/SimpleInput',
  component: SimpleInput,
  parameters: {
    docs: {
      description: {
        component: 'inputのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof SimpleInput>;

const Template: ComponentStory<typeof SimpleInput> = (args) => <SimpleInput {...args} />;

export const simpleInput = Template.bind({});
simpleInput.decorators = [
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
