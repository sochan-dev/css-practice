import type { NextPage } from 'next';
import { ContactForm } from '@/exercise3/organisms/ContactForm';
import Styles from '/src/exercise3/page/styles/exercise3.module.scss';
import { ContactInfo } from '@/exercise3/organisms/ContactInfo';
import { MainVisual } from '@/exercise3/organisms/MainVisual';
import { Footer } from '@/utils/components/Footer';
import { Header } from '@/utils/components/Header';

const thirdExercise: NextPage = () => (
  <div className={Styles.container}>
    <Header />
    <div className={Styles.mainVisual}>
      <MainVisual />
    </div>
    <main className={Styles.main}>
      <section>
        <ContactInfo />
      </section>
      <section>
        <ContactForm isError />
      </section>
    </main>
    <Footer />
  </div>
);

export default thirdExercise;
