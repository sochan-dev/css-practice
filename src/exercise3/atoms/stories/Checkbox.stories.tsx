import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from '../Checkbox';

export default {
  title: 'exercise3/atoms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'チェックボックスのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const checkbox = Template.bind({});
checkbox.decorators = [
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

checkbox.args = {
  name: 'agree',
  id: 'agree',
  value: '1',
  label: '同意します。',
};
