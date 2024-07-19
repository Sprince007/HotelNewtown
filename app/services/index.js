import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Page.module.css';

const Services = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <div className={styles.content}>
        <h1>Our Services</h1>
        <p>Here are the services we offer at Hotel Newtown...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
