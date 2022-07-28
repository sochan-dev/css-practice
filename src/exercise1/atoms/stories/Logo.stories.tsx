import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from '../Logo';

export default {
  title: 'exercise1/atoms/logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: 'サイトロゴコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const SpLogo = Template.bind({});
SpLogo.decorators = [
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
          width: '105px',
          height: '50px',
          position: 'relative',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

export const PcLogo = Template.bind({});
PcLogo.decorators = [
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
          width: '210px',
          height: '100px',
          position: 'relative',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];
