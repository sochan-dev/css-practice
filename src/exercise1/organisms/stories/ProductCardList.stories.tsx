import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductCardList } from '../ProductCardList';

export default {
  title: 'exercise1/organisms/ProductCardList',
  component: ProductCardList,
  parameters: {
    docs: {
      description: {
        component: 'ProductCardのリスト表示のコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof ProductCardList>;

const Template: ComponentStory<typeof ProductCardList> = (args) => <ProductCardList {...args} />;

export const productCardList = Template.bind({});
productCardList.decorators = [
  (Story) => (
    <div
      style={{
        maxWidth: '1000px',
        height: '100vh',
      }}
    >
      <Story />
    </div>
  ),
];
