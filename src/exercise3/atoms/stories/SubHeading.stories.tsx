import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubHeading } from '../SubHeading';

export default {
  title: 'exercise3/atoms/SubHeading',
  component: SubHeading,
  parameters: {
    docs: {
      description: {
        component: '小見出しのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof SubHeading>;

const Template: ComponentStory<typeof SubHeading> = (args) => <SubHeading {...args} />;

export const subHeading = Template.bind({});
subHeading.decorators = [
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

subHeading.args = {
  txt: 'お問合わせフォーム',
};
