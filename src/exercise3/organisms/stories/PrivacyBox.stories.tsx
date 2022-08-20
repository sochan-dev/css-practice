import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PrivacyBox } from '../PrivacyBox';

export default {
  title: 'exercise3/organisms/PrivacyBox',
  component: PrivacyBox,
  parameters: {
    docs: {
      description: {
        component: 'プライバシーポリシー確認のコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof PrivacyBox>;

const Template: ComponentStory<typeof PrivacyBox> = (args) => <PrivacyBox {...args} />;

export const privacyBox = Template.bind({});

privacyBox.decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];
