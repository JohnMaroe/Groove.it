import { useContext } from 'react';
import { useSession } from 'next-auth/client'

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { user, level } = useContext(ChallengesContext);

  const [session] = useSession();

  return (
    <div className={styles.profileContainer}>
      {session && <img src={session.user.image} alt="User profile picture" /> }
      {!session && <img src="/images/avatar.png" alt="User avatar" /> }

      <div>
        <strong>
          {session && session.user.name }
          {!session && user }
        </strong>
        <p>
          <img  src="icons/level.svg" alt="Level icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
}