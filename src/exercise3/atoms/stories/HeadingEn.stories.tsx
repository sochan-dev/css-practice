import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeadingEn } from '../HeadingEn';

export default {
  title: 'exercise3/atoms/HeadingEn',
  component: HeadingEn,
  parameters: {
    docs: {
      description: {
        component: '英語の見出しコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof HeadingEn>;

const Template: ComponentStory<typeof HeadingEn> = (args) => <HeadingEn {...args} />;

export const headingEn = Template.bind({});
headingEn.decorators = [
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

headingEn.args = {
  txt: 'CONTACT',
};
