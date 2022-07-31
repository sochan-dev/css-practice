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

navLinkList.args = {
  navList: [
    {
      id: 1,
      name: 'Home',
      href: 'Home',
    },
    {
      id: 2,
      name: '事業内容',
      href: '事業内容',
    },
    {
      id: 3,
      name: '商品紹介',
      href: '商品紹介',
    },
    {
      id: 4,
      name: '会社概要',
      href: '会社概要',
    },
    {
      id: 5,
      name: '採用情報',
      href: '採用情報',
    },
    {
      id: 6,
      name: 'お問い合わせ',
      href: 'お問い合わせ',
    },
  ],
  activeId: 1,
};
