import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RequiredLabel } from '../RequiredLabel';

export default {
  title: 'exercise3/atoms/RequiredLabel',
  component: RequiredLabel,
  parameters: {
    docs: {
      description: {
        component: '小見出しのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof RequiredLabel>;

const Template: ComponentStory<typeof RequiredLabel> = (args) => <RequiredLabel {...args} />;

export const requiredLabel = Template.bind({});
requiredLabel.decorators = [
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
