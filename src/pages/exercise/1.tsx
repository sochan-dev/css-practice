import type { NextPage } from 'next';
import { Footer } from '@/exercise1/organisms/Footer';
import { Header } from '@/exercise1/organisms/Header';
import { MainContent } from '@/exercise1/organisms/MainContent';
import { MainVisual } from '@/exercise1/organisms/MainVisual';
import { ProductCardList } from '@/exercise1/organisms/ProductCardList';
import { ServiceCardList } from '@/exercise1/organisms/ServiceCardList';
import Styles from '/src/exercise1/page/styles/exercise1.module.scss';

const FirstExercise: NextPage = () => (
  <div className={Styles.container}>
    <Header />
    <main className={Styles.container__main}>
      <MainVisual />
      <div className={Styles.container__contents}>
        <MainContent headerTxt="SERVICE" linkTxt="事業内容" href="#事業内容">
          <ServiceCardList />
        </MainContent>
        <MainContent headerTxt="PICK UP" linkTxt="商品紹介" href="#商品紹介">
          <ProductCardList />
        </MainContent>
      </div>
    </main>
    <Footer />
  </div>
);

export default FirstExercise;
