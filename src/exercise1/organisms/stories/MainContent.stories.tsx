import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainContent } from '../MainContent';
import { ProductCardList } from '../ProductCardList';
import { ServiceCardList } from '../ServiceCardList';

export default {
  title: 'exercise1/organisms/mainContent',
  component: MainContent,
  parameters: {
    docs: {
      description: {
        component: 'MainContentコンポーネント。',
      },
    },
  },
} as ComponentMeta<typeof MainContent>;

const Template: ComponentStory<typeof MainContent> = (args) => <MainContent {...args} />;

export const serviceList = Template.bind({});

serviceList.args = {
  headerTxt: 'SERVICE',
  linkTxt: '事業内容',
  href: '#事業内容',
  children: <ServiceCardList />,
};

export const productList = Template.bind({});

productList.args = {
  headerTxt: 'PICK UP',
  linkTxt: '商品紹介',
  href: '#商品紹介',
  children: <ProductCardList />,
};
