'use client';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Loading Spinner Component
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        className="flex items-center justify-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-10 h-10 border-t-4 border-yellow-600 border-solid rounded-full animate-spin"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </motion.div>
    </div>
  );
};

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate a loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {loading && <LoadingSpinner />}
      {!loading && (
        <>
          <Header />
          <Nav />
          <div className="min-h-20 flex flex-col p-3" style={{ backgroundColor: '#12172b' }}>
            <h3 className={`text-xl font-bold ${loading ? 'text-transparent' : 'text-yellow-600 animate-pulse'}`}>
              Call us
            </h3>
            <p className={`transition duration-700 ease-in-out transform ${loading ? 'translate-y-10 opacity-0' : 'text-white'}`}>
              <i className="fas fa-phone"></i> 694809463
              <i className="fas fa-phone mx-3"></i> 222 22 21 31
              <i className="fas fa-envelope mx-5"></i> info@newtownhotel.net
            </p>
          </div>
          <div className="flex-1 bg-gradient-to-r from-cream via-cream-light to-gray-light mt-20">
            <div className="container mx-auto p-4 md:p-10">
              <div className="relative w-full h-80 md:h-[500px]" style={{ backgroundImage: 'url("/FormatFactoryIMG_0021.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className={`text-4xl md:text-6xl font-bold text-white mb-12 text-center ${loading ? 'opacity-0' : 'animate-fade-in'}`}>
                    About Us
                  </h1>
                </div>
              </div>
              <div className="bg-white p-4 md:p-10 rounded-lg shadow-2xl flex flex-col md:flex-row mt-10 transform transition-all duration-700 hover:scale-105">
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to Newtown</h2>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-6">Our Hotel has been present for over 20 years.</h3>
                  <p className={`mb-8 text-base md:text-lg text-gray-800 leading-relaxed ${loading ? 'opacity-0 translate-x-10' : 'animate-slide-in'}`}>
                    We make the best for all our customers.
                  </p>
                  <p className={`mb-8 text-base md:text-lg text-gray-800 leading-relaxed ${loading ? 'opacity-0 translate-x-10' : 'animate-slide-in'}`}>
                    Our objective at Newtown is to bring together our visitors' societies and spirits with our own, communicating enthusiasm and liberality in the food we share. Official Chef and Owner Philippe Massoud superbly creates a blend of Lebanese, Levantine, Mediterranean motivated food blended in with New York mentality. Delightful herbs and flavors consolidate surfaces to pacify wide-based palates.
                  </p>
                </div>
                <div className="md:w-1/3 flex flex-col space-y-4 mt-10 md:mt-0 md:ml-10">
                  <Image src="/Image.jpg" alt="Hotel View" width={300} height={200} className="rounded-lg shadow-lg hover:scale-110 transition transform duration-500" />
                  <Image src="/FormatFactoryIMG_0130.jpg" alt="Happy Customer" width={300} height={200} className="rounded-lg shadow-lg hover:scale-110 transition transform duration-500" />
                </div>
              </div>
              <div className="bg-white p-4 md:p-10 rounded-lg shadow-2xl mt-10 transform transition-all duration-700 hover:scale-105">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Hotel Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 border rounded-lg text-center transform transition duration-500 hover:scale-105">
                    <i className="fas fa-shuttle-van fa-3x mb-4 text-orange-500"></i>
                    <h3 className="text-2xl font-bold mb-2">Pick Up & Drop</h3>
                    <p>We’ll pick you up from the airport and ensure a comfortable ride to our hotel.</p>
                  </div>
                  <div className="p-6 border rounded-lg text-center transform transition duration-500 hover:scale-105">
                    <i className="fas fa-parking fa-3x mb-4 text-orange-500"></i>
                    <h3 className="text-2xl font-bold mb-2">Parking Space</h3>
                    <p>Convenient and secure parking spaces are available for our guests.</p>
                  </div>
                  <div className="p-6 border rounded-lg text-center transform transition duration-500 hover:scale-105">
                    <i className="fas fa-concierge-bell fa-3x mb-4 text-orange-500"></i>
                    <h3 className="text-2xl font-bold mb-2">Room Service</h3>
                    <p>Enjoy a variety of meals and beverages delivered straight to your room.</p>
                  </div>
                  <div className="p-6 border rounded-lg text-center transform transition duration-500 hover:scale-105">
                    <i className="fas fa-swimming-pool fa-3x mb-4 text-orange-500"></i>
                    <h3 className="text-2xl font-bold mb-2">Swimming Pool</h3>
                    <p>Relax and unwind in our pristine swimming pool, open all year round.</p>
                  </div>
                  <div className="p-6 border rounded-lg text-center transform transition duration-500 hover:scale-105">
                    <i className="fas fa-wifi fa-3x mb-4 text-orange-500"></i>
                    <h3 className="text-2xl font-bold mb-2">Fibre Internet</h3>
                    <p>Stay connected with our high-speed fibre internet available throughout the hotel.</p>
                  </div>
                  <div className="p-6 border rounded-lg text-center transform transition duration-500 hover:scale-105">
                    <i className="fas fa-utensils fa-3x mb-4 text-orange-500"></i>
                    <h3 className="text-2xl font-bold mb-2">Breakfast</h3>
                    <p>Start your day with a delicious and nutritious breakfast, included with your stay.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
      <style jsx>{`
        @media (orientation: portrait) {
          .text-4xl {
            font-size: 2.5rem;
          }
          .text-3xl {
            font-size: 2rem;
          }
          .p-4 {
            padding: 1rem;
          }
          .h-80 {
            height: 300px;
          }
        }

        @media (orientation: landscape) {
          .text-4xl {
            font-size: 4rem;
          }
          .text-3xl {
            font-size: 3rem;
          }
          .p-4 {
            padding: 2rem;
          }
          .h-80 {
            height: 500px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
