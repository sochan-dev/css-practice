import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FooterNavLinkList } from '../FooterNavLinkList';

export default {
  title: 'exercise1/organisms/FooterNavLinkList',
  component: FooterNavLinkList,
  parameters: {
    docs: {
      description: {
        component: 'Footer',
      },
    },
  },
} as ComponentMeta<typeof FooterNavLinkList>;

const Template: ComponentStory<typeof FooterNavLinkList> = (args) => <FooterNavLinkList {...args} />;

export const footerNavLinkList = Template.bind({});
