import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ServiceCard } from '../ServiceCard';

export default {
  title: 'exercise1/molecules/ServiceCard',
  component: ServiceCard,
  parameters: {
    docs: {
      description: {
        component: 'サービスのコンテンツ表示用カードコンポーネント。',
      },
    },
  },
} as ComponentMeta<typeof ServiceCard>;

const Template: ComponentStory<typeof ServiceCard> = (args) => <ServiceCard {...args} />;

export const serviceCard = Template.bind({});

serviceCard.args = {
  serviceName: 'サービス名',
  description: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
  thumbnailSrc: '/img/dmy_thumb01.jpg',
  linkName: '詳しく見る',
  href: '#事業内容_n',
};

serviceCard.decorators = [
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
          width: '350px',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];
