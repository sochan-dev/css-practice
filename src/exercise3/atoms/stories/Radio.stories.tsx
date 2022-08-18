import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio } from '../Radio';

export default {
  title: 'exercise3/atoms/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: 'ラジオボタンのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const radio = Template.bind({});
radio.decorators = [
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

radio.args = {
  name: 'gender',
  value: '0',
  label: '漢おおおおお',
};
