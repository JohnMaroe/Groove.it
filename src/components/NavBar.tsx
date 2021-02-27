import styles from '../styles/components/NavBar.module.css';

export function NavBar() {
  return (
    <nav className={styles.container}>
      <img src="/mini-logo.svg" alt="Move-it logo icon"/>

      <div>
        <i className="fas fa-home" />
        <i className="fas fa-home" />
      </div>
    </nav>
  );
}