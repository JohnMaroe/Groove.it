import styles from '../styles/components/Login.module.css';

export function Login() {
  return (
    <div className={styles.container}>
      <img src="/logo-full.svg" alt="Full logo text"/>

      <strong>Bem-vindo</strong>

      <div>
        <img src="/icons/twitter.svg" alt="Github icon"/>
        <span>Faça login com seu Github para começar</span>
      </div>

      <form onSubmit={(e) => {e.preventDefault()}}>
        <input type="text" placeholder="Digite seu username" />
        <button type="submit"><i className="fas fa-arrow-right" /></button>
      </form>
    </div>
  );
}