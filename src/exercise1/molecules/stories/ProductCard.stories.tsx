import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductCard } from '../ProductCard';

export default {
  title: 'exercise1/molecules/ProductCard',
  component: ProductCard,
  parameters: {
    docs: {
      description: {
        component: '商品のコンテンツ表示用カードコンポーネント。',
      },
    },
  },
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const productCardPc = Template.bind({});

productCardPc.args = {
  title: '商品タイトル',
  thumbnailSrc: '/img/dmy_thumb02.jpg',
};

productCardPc.decorators = [
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
          width: '256px',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

export const productCardMobile = Template.bind({});

productCardMobile.args = {
  title: '商品タイトル',
  thumbnailSrc: '/img/dmy_thumb02.jpg',
};

productCardMobile.decorators = [
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
          width: '160px',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

export const longTextMobile = Template.bind({});

longTextMobile.args = {
  title: '長い商品タイトルタイトル最大30文字まであります',
  thumbnailSrc: '/img/dmy_thumb02.jpg',
};

longTextMobile.decorators = [
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
          width: '160px',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];
