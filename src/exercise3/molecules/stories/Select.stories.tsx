import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from '../Select';

export default {
  title: 'exercise3/molecules/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'selectのコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

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
  isError: false,
  errorMsg: '選択してください。',
  annotation: '未選択はだめですわな',
};

export const error = Template.bind({});
error.decorators = [
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

error.args = {
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
  isError: true,
  errorMsg: '選択してください。',
  annotation: '未選択はだめですわな',
};
