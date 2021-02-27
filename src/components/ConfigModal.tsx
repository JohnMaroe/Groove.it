import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ConfigModal.module.css';

export function ConfigModal() {
  const { setIsConfigUpModalOpen, resetProgress } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <button type="button" onClick={() => setIsConfigUpModalOpen(false)}>
          <img src="/icons/close.svg" alt="Close Modal Button" />
        </button>
        <button onClick={resetProgress}>Reset</button>
      </div>
    </div>
  );
}