import { useContext, useState } from 'react';
import { useRouter } from 'next/router'

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/NavBar.module.css';

interface NavBarProps {
  icon: string;
}

export function NavBar({ icon }: NavBarProps) {
  const { isDarkMode, setIsConfigUpModalOpen } = useContext(ChallengesContext);

  const router = useRouter();

  return (
    <nav className={styles.container}>
      <img src="/mini-logo.svg" data-isdark={isDarkMode} alt="Move-it logo icon" />

      <main>
        <input 
          type="radio" 
          defaultChecked={icon === 'home'} 
          name="nav-icons" 
          id="home"
          onClick={() => {
            router.push('/home');
          }}
        />
        <label htmlFor="home"><i className="fas fa-home" /></label>

        <input 
          type="radio" 
          defaultChecked={icon === 'leaderboard'}
          name="nav-icons" 
          id="leaderboard"
          onClick={() => {
            router.push('/leaderboard');
          }}
        />
        <label htmlFor="leaderboard"><i className="fas fa-medal" /></label>
      </main>

      <div onClick={() => setIsConfigUpModalOpen(true)}><i className="fas fa-cog" /></div>
    </nav>
  );
}