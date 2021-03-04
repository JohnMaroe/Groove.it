import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/client'
import Cookies from 'js-cookie';

import styles from '../styles/components/Login.module.css';

export function Login() {
  const [tempUser, setTempUser] = useState('');

  const router = useRouter();
  const [session] = useSession();

  function handleSubmit(e) {
    e.preventDefault();

    Cookies.set('user', String(tempUser));
    router.push('/home');
  }

  const handleSignin = (e) => {
    e.preventDefault()
    signIn('github')
  }

  const handleSignout = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <div className={styles.container}>
      <img src="/discoball-full.png" alt="Full logo text"/>

      <strong>Bem-vindo</strong>

      <div>
        {session && (
          <a href="#" onClick={handleSignout}>
            <i className="fab fa-github" />
            <span>Clique aqui para deslogar do Github</span>
          </a>
        )} 

        {!session && (
          <a href="#" onClick={handleSignin}>
            <i className="fab fa-github" />
            <span>Faça login com seu Github para começar</span>
          </a>
        )} 
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