import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/client'

import styles from '../styles/components/ConfigModal.module.css';

import { CountdownContext } from '../contexts/CountdownContext';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function ConfigModal() {
  const [isChangeTimeActive, setIsChangeTimeActive] = useState(false);
  const [isConfirmReset, setIsConfirmReset] = useState(false);

  const [minutesTemp, setMinutesTemp] = useState(0);
  const [secondsTemp, setSecondsTemp] = useState(0);

  const [minuteLeft, minuteRight] = String(minutesTemp).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(secondsTemp).padStart(2, '0').split('');

  const { isDarkMode, setIsConfigUpModalOpen, resetProgress } = useContext(ChallengesContext);
  const { setTime } = useContext(CountdownContext);

  const router = useRouter();
  const [session] = useSession();

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

  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        setIsConfigUpModalOpen(false);
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
},[])

  return (
    <div 
      className={`${styles.overlay} ${isDarkMode ? styles.overlayDark : null}`}
    >
      { !isChangeTimeActive ? (
        <div className={styles.container}>
          <header>
            <img 
              src="/logo-full.svg" 
              alt="Move it logo" 
              className={isDarkMode ? styles.darkmodeImg : null}
            />
            
            <button type="button" onClick={() => setIsConfigUpModalOpen(false)}>
              <img src="/icons/close.svg" alt="Close Modal Button" />
            </button>
          </header>

          <main>
            <div onClick={() => {router.push('/api/exercises');}}>
              { 
                isDarkMode ? <img src="/images/yoga-dark.svg" alt="Woman doing yoga" />
                : <img src="/images/yoga.svg" alt="Woman doing yoga" />
              }
              <p>Veja todos os exercisos</p>
            </div>
            <div onClick={() => setIsChangeTimeActive(true)}>
              { 
                isDarkMode ? <img src="/images/alarm-dark.svg" alt="Alarm picture" />
                : <img src="/images/alarm.svg" alt="Alarm picture" />
              }
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
            
            <a onDoubleClick={() => signOut()}>Logout</a>
          </footer>
        </div>
      ) :
      (
        <div className={styles.container}>
          <header>
            <img 
              src="/logo-full.svg" 
              alt="Move it logo" 
              className={isDarkMode ? styles.darkmodeImg : null}
            />
            
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