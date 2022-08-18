import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from '../Heading';

export default {
  title: 'exercise3/atoms/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: '見出しのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const heading = Template.bind({});
heading.decorators = [
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

heading.args = {
  txt: 'お問合わせ',
};
