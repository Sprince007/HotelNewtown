import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (sectionInView) {
      const sections = document.querySelectorAll(`.${styles.section}`);
      sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
        section.classList.add(styles.fadeInUp);
      });
    }
  }, [sectionInView]);

  return (
    <footer className={styles.footer} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.brand}>New Town</h2>
          <p>
            Our objective at New Town Hotel is to bring together our visitors' societies and spirits with our own,
            communicating enthusiasm and liberality in the food we share. Official Chef and Owner Philippe Massoud
            superbly creates a blend of Lebanese, Levantine, Mediterranean inspired food mixed with New York mentality.
            Delightful herbs and flavors combine textures to appease wide-based palates.
          </p>
          <div className={styles.languageSelector}>
            <select className={styles.languageDropdown}>
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Useful Links</h3>
          <ul className={styles.links}>
            <li>
              <Link href="/about" legacyBehavior>
                <a className={styles.link}>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className={styles.link}>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/policies" legacyBehavior>
                <a className={styles.link}>Terms & Conditions</a>
              </Link>
            </li>
            <li>
              <Link href="/faq" legacyBehavior>
                <a className={styles.link}>Help Desk</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Address</h3>
          <p>Ballace, Yaoundé, Cameroon</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7960481256314!2d11.493328246587701!3d3.8539041337453335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf0d76f8edb7%3A0xd86346f12a61c892!2sNew%20Town%20Hotel!5e0!3m2!1sen!2sde!4v1720346240005!5m2!1sen!2sde"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Contact Us</h3>
          <p><i className="fas fa-phone text-yellow-600"></i> 694809463 / 222 222 131</p>
          <p><i className="fas fa-envelope text-yellow-600"></i> info@newtownhotel.net</p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/profile.php?id=61565694118010&mibextid=ZbWKwL" className={styles.icon}><i className="fab fa-facebook-f"></i></a>
            <a href="#" className={styles.icon}><i className="fab fa-twitter"></i></a>
            <a href="#" className={styles.icon}><i className="fab fa-youtube"></i></a>
            <a href="#" className={styles.icon}><i className="fab fa-instagram"></i></a>
            <a href="#" className={styles.icon}><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024 Hotel New Town. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
