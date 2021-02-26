import { Login } from '../components/Login';

import styles from '../styles/pages/Landing.module.css';

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <section>
        <img src="/logo.svg" alt="Logo image" />

        <Login />
      </section>
    </div>
  );
}