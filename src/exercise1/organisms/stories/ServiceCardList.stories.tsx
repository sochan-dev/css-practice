import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ServiceCardList } from '../ServiceCardList';

export default {
  title: 'exercise1/organisms/ServiceCardList',
  component: ServiceCardList,
  parameters: {
    docs: {
      description: {
        component: 'ServiceCardのリスト表示のコンポーネント。ヘッダーとフッターで仕様',
      },
    },
  },
} as ComponentMeta<typeof ServiceCardList>;

const Template: ComponentStory<typeof ServiceCardList> = (args) => <ServiceCardList {...args} />;

export const serviceCardList = Template.bind({});
serviceCardList.decorators = [
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
