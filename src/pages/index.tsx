import Head from 'next/head';
import { getSession } from 'next-auth/client';

import { Login } from '../components/Login';

import styles from '../styles/pages/Landing.module.css';

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <section>
        <img src="/discoball-gradient.svg" alt="Logo image background" />

        <Login />
      </section>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });

  if (session) {
      return {
          props: { session },
          redirect: {
              destination: '/home',
              permanent: false
          }
      };
  }

  return { props: {} };
};