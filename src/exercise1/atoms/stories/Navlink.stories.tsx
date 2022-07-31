import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavLink } from '../NavLink';

export default {
  title: 'exercise1/atoms/NavLink',
  component: NavLink,
  parameters: {
    docs: {
      description: {
        component: '英字大見出しのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = (args) => <NavLink {...args} />;

export const Gorgeous = Template.bind({});
Gorgeous.decorators = [
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
Gorgeous.args = {
  href: '#',
  children: 'Gorgeous!!!',
};

export const Active = Template.bind({});
Gorgeous.decorators = [
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
Active.args = {
  href: '#',
  children: 'Gorgeous!!!',
  isActive: true,
};
