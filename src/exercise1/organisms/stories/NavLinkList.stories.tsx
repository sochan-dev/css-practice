import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavLinkList } from '../NavLinkList';

export default {
  title: 'exercise1/organisms/NavLinkList',
  component: NavLinkList,
  parameters: {
    docs: {
      description: {
        component: 'navLinkのリスト表示のコンポーネント。ヘッダーとフッターで仕様',
      },
    },
  },
} as ComponentMeta<typeof NavLinkList>;

const Template: ComponentStory<typeof NavLinkList> = (args) => <NavLinkList {...args} />;

export const navLinkList = Template.bind({});
navLinkList.decorators = [
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
          width: '1000px',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];
