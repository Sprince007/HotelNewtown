// pages/_app.js

import '../styles/globals.css';
import { useEffect } from 'react';
import Modal from 'react-modal';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Modal.setAppElement('#__next'); // Set the app element once globally
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
