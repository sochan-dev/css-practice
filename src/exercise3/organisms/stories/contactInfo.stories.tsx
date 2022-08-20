import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ContactInfo } from '../ContactInfo';

export default {
  title: 'exercise3/organisms/ContactInfo',
  component: ContactInfo,
  parameters: {
    docs: {
      description: {
        component: 'お問い合わせについて',
      },
    },
  },
} as ComponentMeta<typeof ContactInfo>;

const Template: ComponentStory<typeof ContactInfo> = (args) => <ContactInfo {...args} />;

export const contactInfo = Template.bind({});

contactInfo.decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];
