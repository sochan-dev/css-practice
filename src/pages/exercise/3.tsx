import type { NextPage } from 'next';
import { FormDecoration } from '@/exercise3/Wrapper/FormDecoration';
import { Radio } from '@/exercise3/atoms/Radio';

const thirdExercise: NextPage = () => (
  <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
    <div>
      <Radio name="gender" value="0" label="漢おおおおお" />
      <Radio name="gender" value="1" label="女あああああああ" />
    </div>
  </div>
);

export default thirdExercise;
