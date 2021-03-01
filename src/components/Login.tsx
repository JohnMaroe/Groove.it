import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import styles from '../styles/components/Login.module.css';

export function Login() {
  const [tempUser, setTempUser] = useState('');

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    Cookies.set('user', String(tempUser));
    router.push('/home');
  }

  return (
    <div className={styles.container}>
      <img src="/logo-full.svg" alt="Full logo text"/>

      <strong>Bem-vindo</strong>

      <div>
        <i className="fab fa-github" />
        <span>Faça login com seu Github para começar</span>
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
          type="text" 
          placeholder="Digite seu username" 
          autoComplete="off"
          required
          value={tempUser}
          onChange={(e) => setTempUser(e.target.value)}
        />
        <button type="submit" disabled={tempUser.length === 0}><i className="fas fa-arrow-right" /></button>
      </form>
    </div>
  );
}