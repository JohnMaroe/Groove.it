import { useState, useContext } from 'react';
import { useRouter } from 'next/router'
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ConfigModal.module.css';
import { CountdownContext } from '../contexts/CountdownContext';

export function ConfigModal() {
  const [isChangeTimeActive, setIsChangeTimeActive] = useState(false);
  const [isConfirmReset, setIsConfirmReset] = useState(false);

  const [minutesTemp, setMinutesTemp] = useState(0);
  const [secondsTemp, setSecondsTemp] = useState(0);

  const [minuteLeft, minuteRight] = String(minutesTemp).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(secondsTemp).padStart(2, '0').split('');

  const { setIsConfigUpModalOpen, resetProgress } = useContext(ChallengesContext);
  const { setTime } = useContext(CountdownContext);

  const router = useRouter();

  function handleCountdownClickMinutes(type: string) {
    if (type === 'left') {
      minuteLeft === '9' ? setMinutesTemp(0 + Number(minuteRight)) 
      : setMinutesTemp(minutesTemp + 10);
    } else if (type === 'right') {
      minuteRight === '9' ? setMinutesTemp(Number(`${minuteLeft}0`)) 
      : setMinutesTemp(minutesTemp + 1);
    }
  }

  function handleCountdownClickSeconds(type: string) {
    if (type === 'left') {
      secondLeft === '9' ? setSecondsTemp(0 + Number(secondRight)) 
      : setSecondsTemp(secondsTemp + 10);
    } else if (type === 'right') {
      secondRight === '9' ? setSecondsTemp(Number(`${secondLeft}0`)) 
      : setSecondsTemp(secondsTemp + 1);
    }
  }

  function changeCurrentCountdownTime() {
    const timeInSeconds = (minutesTemp * 60) + secondsTemp;
    setTime(timeInSeconds);
  }

  return (
    <div className={styles.overlay}>
      { !isChangeTimeActive ? (
        <div className={styles.container}>
          <header>
            <img src="/logo-full.svg" alt="Move it logo" />
            
            <button type="button" onClick={() => setIsConfigUpModalOpen(false)}>
              <img src="/icons/close.svg" alt="Close Modal Button" />
            </button>
          </header>

          <main>
            <div onClick={() => {router.push('/api/exercises');}}>
              <img src="/yoga.svg" alt="Woman doing yoga" />
              <p>Veja todos os exercisos</p>
            </div>
            <div onClick={() => setIsChangeTimeActive(true)}>
              <img src="/alarm.svg" alt="Alarm picture" />
              <p>Mude a duração do countdown</p>
            </div>
          </main>

          <footer>
            { !isConfirmReset ? (
              <button 
                className={styles.resetButton} 
                onClick={() => setIsConfirmReset(true)}
              >
                Resetar todo progresso
              </button>
            ) : (
              <button 
                className={`${styles.confirmResetButton} ${styles.resetButton}`} 
                onClick={resetProgress}
              >
                  <i className="fas fa-exclamation-triangle" />
                  Clique para confirmar
                  <i className="fas fa-exclamation-triangle" />
              </button>
            )
            }
            
          </footer>
        </div>
      ) :
      (
        <div className={styles.container}>
          <header>
            <img src="/logo-full.svg" alt="Move it logo" />
            
            <button type="button" onClick={() => setIsConfigUpModalOpen(false)}>
              <img src="/icons/close.svg" alt="Close Modal Button" />
            </button>
          </header>

          <section>
            <aside>
              <h2>Mude a duração:</h2>
              <p>clique nos números</p>
            </aside>

            <div className={styles.countdownContainer}>
              <div>
                <span onClick={() => handleCountdownClickMinutes('left')}>{minuteLeft}</span>
                <span onClick={() => handleCountdownClickMinutes('right')}>{minuteRight}</span>
              </div>
              <span>:</span>
              <div>
                <span onClick={() => handleCountdownClickSeconds('left')}>{secondLeft}</span>
                <span onClick={() => handleCountdownClickSeconds('right')}>{secondRight}</span>
              </div>
            </div>
          </section>

          <footer>
            <button 
              className={`${styles.applyButton} ${styles.resetButton}`}
              onClick={changeCurrentCountdownTime}
            >
              Aplicar
            </button>
          </footer>
        </div>
      )
      }
    </div>
  );
}