import { useContext } from 'react';
import { useRouter } from 'next/router'

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/NavBar.module.css';

export function NavBar() {
  const { navBarIconOn, setNavBarIconOn, setIsConfigUpModalOpen } = useContext(ChallengesContext);

  const router = useRouter();

  return (
    <nav className={styles.container}>
      <img src="/mini-logo.svg" alt="Move-it logo icon"/>

      <main>
        <input 
          type="radio" 
          defaultChecked={navBarIconOn === 'home'} 
          name="nav-icons" 
          id="home"
          onClick={() => {
            setNavBarIconOn('home');
            router.push('/home');
          }}
        />
        <label htmlFor="home"><i className="fas fa-home" /></label>

        <input 
          type="radio" 
          defaultChecked={navBarIconOn === 'leaderboard'} 
          name="nav-icons" 
          id="leaderboard"
          onClick={() => {
            setNavBarIconOn('leaderboard');
            router.push('/leaderboard');
          }}
        />
        <label htmlFor="leaderboard"><i className="fas fa-medal" /></label>
      </main>

      <div onClick={() => setIsConfigUpModalOpen(true)}><i className="fas fa-cog" /></div>
    </nav>
  );
}