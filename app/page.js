'use client';
import { SpeedInsights } from "@vercel/speed-insights/next"
import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import RoomList from './components/RoomList';
import { FaWifi, FaConciergeBell, FaBed, FaTv, FaCoffee, FaBroom } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

<SpeedInsights/>

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const images = [
    '/FormatFactoryIMG_0134.jpg',
    '/FormatFactoryIMG_0132.jpg',
    '/FormatFactoryIMG_0022.jpg',
    '/FormatFactoryIMG_0013.jpg',
    'FormatFactoryIMG_0021.jpg',
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Nav />
      <div className="min-h-20 flex flex-col p-3" style={{ backgroundColor: '#12172b' }}>
        <h3 className="text-xl font-bold text-transparent">Call us</h3>
        <p className="text-white">
          <i className="fas fa-phone"></i> 650935097
          <i className="fas fa-phone mx-3"></i> 222 22 21 31
          <i className="fas fa-regular fa-envelope mx-5"></i>info@newtownhotel.net
        </p>
      </div>
      <div className="relative">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Hotel Image ${index + 1}`} className="w-full h-[600px] object-fit: contain brightness-100" />
            </div>
          ))}
        </Slider>
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h1 className="text-6xl font-bold text-white mb-4" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: 1, duration: 1 }}>
            New Town Hotel
          </motion.h1>
          <motion.h2 className="text-4xl text-white mb-6" initial={{ y: 50 }} animate={{ y: 0 }} transition={{ delay: 1.2, duration: 1 }}>
            Ballace, Yaoundé
          </motion.h2>
          <Link href="/rooms">
            <motion.button
              className="mt-9 px-8 py-2 bg-yellow-600 border-2 border-yellow-600 text-white text-lg font-bold rounded-md hover:bg-transparent transition duration-300"
              style={{ fontFamily: 'Times New Roman, serif' }}
              whileHover={{ scale: 1.1 }}
            >
              Explore Rooms
            </motion.button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="flex-1 p-8 bg-gradient-to-r from-cream via-cream-light to-gray-light"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto">
          <motion.h1
            className="text-4xl font-bold text-gray-800 mb-4 text-center p-7"
            variants={itemVariants}
          >
            Welcome to New Town Hotel
          </motion.h1>
          <motion.p
            className="mb-8 text-center text-lg text-gray-700"
            variants={itemVariants}
          >
            Experience the luxury and comfort of our premier accommodation facility.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-center">
            {[
              { icon: FaWifi, text: 'Free High-Speed WiFi' },
              { icon: FaConciergeBell, text: '24 hours reception' },
              { icon: FaBed, text: 'Designer & comfort rooms' },
              { icon: FaTv, text: 'Flat screen TV' },
              { icon: FaCoffee, text: 'Tea & coffee making facilities' },
              { icon: FaBroom, text: 'Daily Housekeeping' },
            ].map(({ icon: Icon, text }, index) => (
              <motion.div
                key={index}
                className="transition-transform duration-500 transform hover:scale-105"
                variants={iconVariants}
              >
                <Icon className="mb-2 text-4xl text-yellow-600 mx-auto" />
                <p className="text-lg text-yellow-600">{text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="bg-white p-10 rounded-lg shadow-2xl mb-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Why Choose New Town Hotel</h2>
            <p className="text-lg text-gray-700 text-center mb-4">
              Hotel New Town is a premier accommodation facility that offers top-notch services to its guests. Situated in a prime location, we provide comfortable and luxurious rooms for travelers from all walks of life. Our dedicated staff ensures that each guest feels like royalty, with impeccable customer service and attention to detail. Alongside our exceptional accommodation offerings, we also boast an exquisite bar and restaurant where guests can indulge in culinary delights and refreshing beverages. Whether you're a business traveler seeking comfort and convenience or a leisure traveler in search of relaxation, Hotel New Town is the perfect destination for your needs.
            </p>
          </motion.div>
          <RoomList /> {/* Include the RoomList component here */}
          <motion.div
            className="mb-8 text-center p-10"
            variants={itemVariants}
          >
            <h2
              className="text-3xl font-bold mb-4 relative inline-block after:block after:h-1 after:w-16 after:bg-gray-300 after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:rounded-md"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Our Location
            </h2>
            <div className="w-full h-64">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7960481256314!2d11.493328246587701!3d3.8539041337453335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf0d76f8edb7%3A0xd86346f12a61c892!2sNew%20Town%20Hotel!5e0!3m2!1sen!2sde!4v1720346240005!5m2!1sen!2sde"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;
