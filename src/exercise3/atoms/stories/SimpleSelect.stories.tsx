import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SimpleSelect } from '../SimpleSelect';

export default {
  title: 'exercise3/atoms/SimpleSelect',
  component: SimpleSelect,
  parameters: {
    docs: {
      description: {
        component: 'textAreaのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof SimpleSelect>;

const Template: ComponentStory<typeof SimpleSelect> = (args) => <SimpleSelect {...args} />;

export const select = Template.bind({});
select.decorators = [
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

select.args = {
  attribute: { id: 'select', name: 'select', defaultValue: '' },
  optionList: [
    {
      id: 0,
      attribute: { value: '' },
      label: '選択してください！',
    },
    {
      id: 1,
      attribute: { value: '1' },
      label: 'いちちちちいち',
    },
    {
      id: 2,
      attribute: { value: '2' },
      label: 'ﾆﾝﾆﾝﾆﾝﾆﾝｗｗｗｗ',
    },
    {
      id: 3,
      attribute: { value: '3' },
      label: 'さんさんさんさん',
    },
    {
      id: 4,
      attribute: { value: '4' },
      label: 'よんしよんし～',
    },
  ],
};
