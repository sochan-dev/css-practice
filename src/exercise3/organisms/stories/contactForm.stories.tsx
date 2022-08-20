import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ContactForm } from '../ContactForm';

export default {
  title: 'exercise3/organisms/ContactForm',
  component: ContactForm,
  parameters: {
    docs: {
      description: {
        component: 'お問い合わせフォーム',
      },
    },
  },
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => <ContactForm {...args} />;

export const contactForm = Template.bind({});

contactForm.decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];

contactForm.args = {
  isError: false,
};

export const error = Template.bind({});

error.decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];

error.args = {
  isError: true,
};
