import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { NavBar } from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp;
