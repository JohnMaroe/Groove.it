import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ConfigModal.module.css';

export function ConfigModal() {
  const { setIsConfigUpModalOpen } = useContext(ChallengesContext);

  return (
    <div 
      className={styles.overlay}
      onClick={() => setIsConfigUpModalOpen(false)}
    >
      <div className={styles.container}>
        <button type="button" onClick={() => setIsConfigUpModalOpen(false)}>
          <img src="/icons/close.svg" alt="Close Modal Button" />
        </button>
      </div>
    </div>
  );
}