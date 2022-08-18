import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ServiceCard } from '../ServiceCard';

export default {
  title: 'exercise2/molecules/ServiceCard',
  component: ServiceCard,
  parameters: {
    docs: {
      description: {
        component: 'サービスの画像の影付きコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof ServiceCard>;

const Template: ComponentStory<typeof ServiceCard> = (args) => <ServiceCard {...args} />;

export const fourContent = Template.bind({});
fourContent.decorators = [
  (Story) => (
    <div
      style={{
        padding: '0 30px',
        backgroundColor: 'gray',
      }}
    >
      <Story />
    </div>
  ),
];

fourContent.args = {
  index: '1',
  title: '事業タイトルが入ります。',
  description:
    '事業内容の説明テキストが入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。',
  description2:
    '事業内容の説明テキストが入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。',
  contentSrcList: [
    {
      id: 1,
      src: '/img/dmy_thumb03.jpg',
      srcset: '/img/dmy_thumb03.jpg 2x',
    },
    {
      id: 2,
      src: '/img/dmy_thumb03.jpg',
      srcset: '/img/dmy_thumb03.jpg 2x',
    },
    {
      id: 3,
      src: '/img/dmy_thumb03.jpg',
      srcset: '/img/dmy_thumb03.jpg 2x',
    },
    {
      id: 4,
      src: '/img/dmy_thumb03.jpg',
      srcset: '/img/dmy_thumb03.jpg 2x',
    },
  ],
  backgroundSrc: '/img/ph_service01.jpg',
};

export const threeContent = Template.bind({});
threeContent.decorators = [
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
          width: '335px',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

threeContent.args = {
  index: '1',
  title: '事業タイトルが入ります。',
  description:
    '事業内容の説明テキストが入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。',
  description2:
    '事業内容の説明テキストが入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。',
  contentSrcList: [
    {
      id: 1,
      src: '/img/dmy_thumb03.jpg',
      srcset: '/img/dmy_thumb03.jpg 2x',
    },
    {
      id: 2,
      src: '/img/dmy_thumb03.jpg',
      srcset: '/img/dmy_thumb03.jpg 2x',
    },
    {
      id: 3,
      src: '/img/dmy_thumb03.jpg',
      srcset: '/img/dmy_thumb03.jpg 2x',
    },
  ],
  backgroundSrc: '/img/ph_service01.jpg',
};

export const twoContent = Template.bind({});
twoContent.decorators = [
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
          width: '335px',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

twoContent.args = {
  index: '1',
  title: '事業タイトルが入ります。',
  description:
    '事業内容の説明テキストが入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。',
  description2:
    '事業内容の説明テキストが入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。',
  contentSrcList: [
    {
      id: 1,
      src: '/img/dmy_thumb03.jpg',
      srcset: '/img/dmy_thumb03.jpg 2x',
    },
    {
      id: 2,
      src: '/img/dmy_thumb03.jpg',
      srcset: '/img/dmy_thumb03.jpg 2x',
    },
  ],
  backgroundSrc: '/img/ph_service01.jpg',
};

export const oneContent = Template.bind({});
oneContent.decorators = [
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
          width: '335px',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

oneContent.args = {
  index: '1',
  title: '事業タイトルが入ります。',
  description:
    '事業内容の説明テキストが入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。',
  description2:
    '事業内容の説明テキストが入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。',
  contentSrcList: [
    {
      id: 1,
      src: '/img/dmy_thumb03.jpg',
      srcset: '/img/dmy_thumb03.jpg 2x',
    },
  ],
  backgroundSrc: '/img/ph_service01.jpg',
};
