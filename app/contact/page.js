// pages/contact.js
"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_rdpt99r', 'template_6sjcf0h', form, 'qgeSpJoVp2kf7yGk4')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Thank you.');
      });
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-gray-100">
      <Header />
      <Nav />
      <div className="min-h-20 flex flex-col p-3" style={{ backgroundColor: '#12172b' }}>
        <h3 className="text-xl font-bold text-transparent">Call us</h3>
        <p className="text-white">
          <i className="fas fa-phone"></i> 650935097
          <i className="fas fa-phone mx-3"></i> 222 22 21 31
          <i className="fas fa-envelope mx-5"></i> info@newtownhotel.net
        </p>
      </div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4"></h2>
        <div className="w-full h-64">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7960481256314!2d11.493328246587701!3d3.8539041337453335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf0d76f8edb7%3A0xd86346f12a61c892!2sNew%20Town%20Hotel!5e0!3m2!1sen!2sde!4v1720346240005!5m2!1sen!2sde"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="flex-1 p-8 bg-gradient-to-r from-cream via-cream-light to-gray-light">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className={`${styles.contactInfo} bg-white p-6 rounded-lg shadow-lg md:w-1/3`}>
            <h2 className="text-2xl font-bold text-white mb-4">Contact info</h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">Address</h3>
              <p className="text-white">Ballace, Yaoundé, Cameroon</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">Write us</h3>
              <p className="text-white">info@newtownhotel.net</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">Call us</h3>
              <p className="text-white">
                <i className="fab fa-whatsapp"></i> 699 89 02 20 <br />
                <i className="fas fa-phone"></i> 650935097
                <i className="fas fa-phone mx-3"></i> 222 22 21 31
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Follow us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
                <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg md:ml-8 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold text-white mb-4 text-center">Contact</h1>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className="mb-4">
                <input type="text" name="name" placeholder="Your name" className="w-full p-2 border border-gray-300 rounded-md" value={form.name} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <input type="email" name="email" placeholder="Your email" className="w-full p-2 border border-gray-300 rounded-md" value={form.email} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <input type="text" name="subject" placeholder="What is the subject of your message" className="w-full p-2 border border-gray-300 rounded-md" value={form.subject} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <textarea name="message" placeholder="Message" className="w-full p-2 border border-gray-300 rounded-md" value={form.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded-md">Send the message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <a 
        href="https://wa.me/699890220" 
        className="fixed bottom-20 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
    </div>
  );
};

export default Contact;
