// pages/_app.js
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../styles/globals.css';
import { useEffect } from 'react';
import Modal from 'react-modal';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Modal.setAppElement('#__next'); // Set the app element once globally
  }, []);
<SpeedInsights/>
  return <Component {...pageProps} />;
}

export default MyApp;
