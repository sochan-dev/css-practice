import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HamburgerButton } from '../HamburgerButton';

export default {
  title: 'exercise1/atoms/HamburgerButton',
  component: HamburgerButton,
  parameters: {
    docs: {
      description: {
        component: 'ハンバーガーボタン',
      },
    },
  },
} as ComponentMeta<typeof HamburgerButton>;

const Template: ComponentStory<typeof HamburgerButton> = (args) => <HamburgerButton {...args} />;

export const Hamburger = Template.bind({});
Hamburger.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '100px',
          height: '100px',
          position: 'relative',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

export const Clicked = Template.bind({});
Clicked.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '100px',
          height: '100px',
          position: 'relative',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

Clicked.args = {
  isActive: true,
};
