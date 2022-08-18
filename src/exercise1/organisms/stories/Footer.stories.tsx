import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from '../../../utils/components/Footer';

export default {
  title: 'exercise1/organisms/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: 'Footer',
      },
    },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const footer = Template.bind({});
