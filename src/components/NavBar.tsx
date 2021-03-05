import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Cookies from 'js-cookie';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/NavBar.module.css';

interface NavBarProps {
  icon: string;
}

export function NavBar({ icon }: NavBarProps) {
  const { setIsConfigUpModalOpen } = useContext(ChallengesContext);

  const router = useRouter();

  return (
    <nav className={styles.container}>
      <Link href="/">
        <img 
          src="/discoball.svg" 
          alt="Move-it logo icon"  
          className={Cookies.get('mode') === 'dark' ? styles.darkmodeImg : ''}
        />
      </Link>

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