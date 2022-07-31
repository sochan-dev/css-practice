import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LinkButton } from '../LinkButton';

export default {
  title: 'exercise1/atoms/LinkButton',
  component: LinkButton,
  parameters: {
    docs: {
      description: {
        component: 'リンク付きボタンのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [
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
          width: '300px',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

Primary.args = {
  type: 'primary',
  children: 'Primary',
  href: '#',
};

export const Secondary = Template.bind({});
Secondary.decorators = [
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
          width: '300px',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

Secondary.args = {
  type: 'secondary',
  children: 'Secondary',
  href: '#',
};
