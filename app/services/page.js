// app/services.js
"use client"
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Services = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const servicesData = [
    {
      title: 'Accommodation Services',
      image: '/FormatFactoryIMG_0107.jpg',
      items: [
        'Room reservation and assignments',
        'Room upgrade or downgrade',
      ],
    },
    {
      title: 'Food and Beverages Services',
      image: '/FormatFactoryIMG_0130.jpg',
      items: [
        'Room service',
        'Restaurant and bar service',
        'In-room breakfast',
        'Special dietary menu request',
      ],
    },
    {
      title: 'Concierge Services',
      image: '/imagesConcierge.jpg',
      items: [
        'Activities booking',
        'Transportation arrangements (taxis)',
        'Local information and recommendations',
      ],
    },
    {
      title: 'Additional Services',
      image: '/Housekeeper-cleaning-hotel-room-during-Covid.jpg',
      items: [
        'Parking',
        'Housekeeping services',
        'Daily room cleaning and maintenance',
        'Linen and towel replacement',
        'Turndown service (upon request)',
      ],
    },
    {
      title: 'Front Desk Services',
      image: '/FormatFactoryIMG_0015.jpg',
      items: [
        'Check-in and check-out',
        'Luggage storage and assistance',
      ],
    },
    {
      title: 'Business Services',
      image: '/360_F_167006826_2X4YTrNkjmVs96QC8aX522j7MyNukXnc.jpg',
      items: [
        'Meeting and conference rooms',
      ],
    },
    {
      title: 'Transportation Services',
      image: '/106.jpg',
      items: [
        'Car rental services',
        'Parking service',
      ],
    },
    {
      title: 'Laundry Services',
      image: '/laundry-services.jpg',
      items: [
        'Laundry and dry cleaning services',
        'Package storage',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Nav />
      <div className="min-h-20 flex flex-col p-3" style={{ backgroundColor: '#12172b' }}>
        <h3 className="text-xl font-bold text-transparent">Call us</h3>
        <p className="text-white">
          <i className="fas fa-phone"></i> +237 674925061
          <i className="fas fa-phone mx-3"></i> 222 22 21 31
          <i className="fas fa-envelope mx-5"></i> info@newtownhotel.net
        </p>
      </div>
      <div className="flex-1 p-8 bg-gradient-to-r from-cream via-cream-light to-gray-light">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Our Services</h1>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-500 transform ${loaded ? 'fade-in' : ''}`}
          >
            <div className="relative w-full md:w-1/2 h-64">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="contain"
                className="object-contain"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{service.title}</h2>
              <ul className="list-disc ml-6">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-lg text-gray-700 mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
