import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Page.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <div className={styles.content}>
        <h1>About Us</h1>
        <p>Hotel Newtown is a premier accommodation facility that offers top-notch services to its guests...</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
