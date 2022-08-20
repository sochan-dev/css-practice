import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainVisual } from '../MainVisual';

export default {
  title: 'exercise3/organisms/MainVisual',
  component: MainVisual,
  parameters: {
    docs: {
      description: {
        component: 'メインビジュアルのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof MainVisual>;

const Template: ComponentStory<typeof MainVisual> = (args) => <MainVisual {...args} />;

export const mainVisual = Template.bind({});

mainVisual.decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];
