import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Thumbnail } from '../Thumbnail';

export default {
  title: 'exercise2/atoms/Thumbnail',
  component: Thumbnail,
  parameters: {
    docs: {
      description: {
        component: '画像コンポーネント',
      },
    },
  },
} as ComponentMeta<typeof Thumbnail>;

const Template: ComponentStory<typeof Thumbnail> = (args) => <Thumbnail {...args} />;

export const MvIllust = Template.bind({});
MvIllust.decorators = [
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
          height: '209px',
          backgroundColor: 'black',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

MvIllust.args = {
  src: '/img/dmy_thumb03.jpg',
  alt: 'メインビジュアルの写真',
};

export const DmyThumb = Template.bind({});
DmyThumb.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '10vw',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '500px',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

DmyThumb.args = {
  src: '/img/dmy_thumb01.jpg',
  alt: 'ダミーのサムネイル写真',
};
