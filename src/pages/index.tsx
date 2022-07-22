import type { NextPage } from 'next';
import Head from 'next/head';
import Styles from '/styles/Home.module.scss';

const Home: NextPage = () => (
  <>
    <Head>
      <title>各都道府県の人工推移をグラフで比較してみよう</title>
      <meta name="description" content="HTML＋CSS コーディングの強化書 EXERCISE 1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <div>
        <p>
          <a href="./exercise/1">EXERCISE 1</a>
        </p>
      </div>
    </div>
  </>
);

export default Home;
