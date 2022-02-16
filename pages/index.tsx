import type { NextPage } from 'next'
import Dasboard from '../src/components/dashboard';

import Head from 'next/head';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <script src="https://code.responsivevoice.org/responsivevoice.js?key=atziOM7d" ></script>
      </Head>
    <Dasboard />
    </>
  );
};

export default Home
