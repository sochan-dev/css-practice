import type { NextPage } from 'next';
import { Logo } from '@/exercise1/atoms/Logo';
import { ServiceCard } from '@/exercise1/molecules/ServiceCard';
import { Header } from '@/exercise1/organisms/Header';
import { ServiceCardList } from '@/exercise1/organisms/ServiceCardList';

const FirstExercise: NextPage = () => (
  <div>
    <Header />
    <div style={{ maxWidth: '1000px', position: 'relative', top: '150px' }}>
      <ServiceCardList />
    </div>
  </div>
);

export default FirstExercise;
