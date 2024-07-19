import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Page.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <div className={styles.content}>
        <h1>Contact Us</h1>
        <p>Here is how you can get in touch with us...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
