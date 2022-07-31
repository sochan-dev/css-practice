import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../Button';
/**
 * Button Component for explanation of StoryBook
 */
export default {
  title: 'home/atoms/button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '練習用のボタンコンポーネント',
      },
    },
    design: {
      type: 'xd',
      url: '/EXERCISE01.xd',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  txt: 'Primaryだよ',
  onClick: action('clicked'),
};
