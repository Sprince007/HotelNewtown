"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send', form);
      alert('Message sent successfully!');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert('There was an error sending the message.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <Nav />
      <div className="min-h-20 flex flex-col p-3" style={{ backgroundColor: '#12172b' }}>
        <h3 className="text-xl font-bold text-transparent">Call us</h3>
        <p className="text-white">
          <i className="fas fa-phone"></i> 694809463
          <i className="fas fa-phone mx-3"></i> 222 22 21 31
          <i className="fas fa-envelope mx-5"></i> info@newtownhotel.net
        </p>
      </div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Location</h2>
        <motion.div
          className="w-full h-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7960481256314!2d11.493328246587701!3d3.8539041337453335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf0d76f8edb7%3A0xd86346f12a61c892!2sNew%20Town%20Hotel!5e0!3m2!1sen!2sde!4v1720346240005!5m2!1sen!2sde"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
      <motion.div
        className="flex-1 p-8 bg-gradient-to-r from-cream via-cream-light to-gray-light"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto flex flex-col md:flex-row">
          <motion.div
            className={`${styles.contactInfo} bg-gray-800 text-white p-6 rounded-lg shadow-lg md:w-1/3`}
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4">Contact info</h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Address</h3>
              <p>Ballace, Yaoundé, Cameroon</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Write us</h3>
              <p>info@newtownhotel.net</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Call us</h3>
              <p>
                <i className="fab fa-whatsapp"></i> +237679044175 <br />
                <i className="fas fa-phone"></i> +237694809463
                <i className="fas fa-phone mx-3"></i> 222 22 21 31
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Follow us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61565694118010&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
                <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 p-6 bg-white rounded-lg shadow-lg md:ml-8 mt-8 md:mt-0"
            variants={itemVariants}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Contact</h1>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="What is the subject of your message"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300"
              >
                Send
              </button>
            </form>
          </motion.div>
          {/* WhatsApp Button */}
          <motion.div
            className="md:ml-8 md:mt-0 mt-8 flex items-center justify-center"
            variants={itemVariants}
          >
            <a
              href="https://wa.me/+237679044175"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-1 py-1 rounded-full flex hover:bg-green-600 transition-colors duration-300"
            >
              <i className="fab fa-whatsapp mr-1 text-2xl"></i> WhatsApp Us
            </a>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;
