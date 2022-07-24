import Styles from 'home/styles/home.module.scss';
import type { NextPage } from 'next';
import Head from 'next/head';
import { PageLinkList } from '@/home/components/organisms/PageLinkList';

const Home: NextPage = () => (
  <>
    <Head>
      <title>HTML＋CSS コーディングの強化書</title>
      <meta name="description" content="top page" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={Styles.container}>
      <PageLinkList />
    </div>
  </>
);

export default Home;
