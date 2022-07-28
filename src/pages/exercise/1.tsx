import type { NextPage } from 'next';
import { HeadingText } from '@/exercise1/atoms/HeadingText';

const FirstExercise: NextPage = () => (
  <div
    style={{
      position: 'relative',
      height: '50vw',
      width: '50vh',
      backgroundColor: 'red',
    }}
  >
    <div
      style={{
        position: 'relative',
        height: '50%',
        width: '50%',
        backgroundColor: 'blue',
      }}
    >
      <HeadingText>gorgeous!!</HeadingText>
    </div>
  </div>
);

export default FirstExercise;
