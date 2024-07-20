"use client";
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const faqs = [
    {
      question: '1. Does Hotel New town provide complimentary wifi for guests?',
      answer: 'Yes, Hotel New town offers complimentary wifi to all guests. Stay connected and enjoy high-speed internet access throughout your stay.',
    },
    {
      question: '2. Does Hotel New town have an on-site restaurant and bar?',
      answer: 'Absolutely! Hotel New town features an on-site restaurant and bar, offering guests a convenient and enjoyable dining experience. Indulge in delicious meals and refreshing drinks without having to leave the comfort of the hotel.',
    },
    {
      question: '3. Are there different types of lodging options available at Hotel New town?',
      answer: 'Yes, Hotel New town offers a variety of lodging options to cater to different preferences and needs. From cozy and comfortable standard rooms to spacious suites, guests can choose the accommodation that best suits their requirements and budget.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
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
      <div className="flex-1 p-8 bg-gradient-to-r from-cream via-cream-light to-gray-light">
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h1>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h2
                className="text-xl md:text-2xl font-bold flex justify-between items-center cursor-pointer p-4 bg-gray-100 rounded-lg transition-colors duration-300 hover:bg-gray-200"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="ml-4 transform transition-transform duration-300">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </h2>
              <div className={`mt-4 ml-4 text-lg text-gray-700 transition-all duration-500 ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
