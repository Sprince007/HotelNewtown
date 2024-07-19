// app/policies.js
"use client"
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { FaClock, FaBan, FaMoneyBillAlt, FaRegAddressCard, FaUserAlt, FaSmokingBan, FaWineGlassAlt, FaVolumeMute, FaSmile, FaShieldAlt, FaLock, FaBalanceScale } from 'react-icons/fa';

const Policies = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const policies = [
    {
      title: 'Check-in and Check-out',
      icon: FaClock,
      items: [
        'Check-in time: 1:00 PM',
        'Check-out time: 12:00 PM',
        'Early check-in and late check-out available upon request, subject to availability',
      ],
    },
    {
      title: 'Cancellation Policy',
      icon: FaBan,
      items: [
        'Cancellations must be made at least 24 hours prior to arrival to avoid a penalty of one night\'s stay',
        'Group bookings (5 rooms or more) require a 7-day cancellation notice',
      ],
    },
    {
      title: 'Payment Terms',
      icon: FaMoneyBillAlt,
      items: [
        'Orange / MTN mobile money',
        'Payment is due upon check-in',
      ],
    },
    {
      title: 'Room Rates and Availability',
      icon: FaRegAddressCard,
      items: [
        'Room rates are subject to change based on season and availability',
        'Rooms are assigned on a first-come, first-served basis',
      ],
    },
    {
      title: 'Guest Registration and Identification',
      icon: FaUserAlt,
      items: [
        'All guests must register at the front desk upon arrival',
        'Valid government-issued ID required',
      ],
    },
    {
      title: 'Age Restrictions',
      icon: FaUserAlt,
      items: [
        'Minimum age for check-in: 21 years old',
      ],
    },
    {
      title: 'Occupancy Limits',
      icon: FaUserAlt,
      items: [
        'Maximum number of guests per room: 2',
      ],
    },
    {
      title: 'Smoking Policy',
      icon: FaSmokingBan,
      items: [
        'Hotel Newtown is a non-smoking hotel',
        'Designated smoking area available outside',
      ],
    },
    {
      title: 'Alcohol Consumption',
      icon: FaWineGlassAlt,
      items: [
        'Alcohol consumption allowed in designated areas only',
        'Excessive alcohol consumption may result in removal from the premises',
      ],
    },
    {
      title: 'Noise and Disturbance',
      icon: FaVolumeMute,
      items: [
        'Quiet hours: 10:00 PM - 8:00 AM',
        'Excessive noise may result in removal from the premises',
      ],
    },
    {
      title: 'Guest Behavior and Conduct',
      icon: FaSmile,
      items: [
        'Guests are expected to behave in a respectful and considerate manner',
        'Damage to hotel property or disturbance of other guests may result in removal from the premises',
      ],
    },
    {
      title: 'Liability and Responsibility',
      icon: FaShieldAlt,
      items: [
        'Hotel Newtown is not liable for lost or stolen items',
        'Guests are responsible for any damages or loss incurred during their stay',
      ],
    },
    {
      title: 'Privacy and Data Protection',
      icon: FaLock,
      items: [
        'Hotel Newtown collects personal information for the purpose of processing reservations and providing hotel services',
        'Information is kept confidential and secure',
      ],
    },
    {
      title: 'Force Majeure and Unforeseen Circumstances',
      icon: FaBalanceScale,
      items: [
        'Hotel Newtown is not liable for unforeseen circumstances beyond our control',
      ],
    },
    {
      title: 'Dispute Resolution and Complaint Procedures',
      icon: FaBalanceScale,
      items: [
        'Complaints should be directed to the front desk or hotel management',
        'We will investigate and respond promptly',
      ],
    },
    {
      title: 'Governing Law and Jurisdiction',
      icon: FaBalanceScale,
      items: [
        'Hotel Newtown policies are governed by the laws of [State/Province]',
        'Any disputes will be resolved in the courts of [State/Province]',
      ],
    },
  ];

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
        <div className="container mx-auto p-10 bg-white shadow-lg rounded-lg">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">Hotel Policies</h1>
          {policies.map((policy, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-3xl font-bold flex items-center mb-4 text-gray-700">
                <policy.icon className="mr-4" />
                {policy.title}
              </h2>
              <ul className="list-disc ml-10">
                {policy.items.map((item, idx) => (
                  <li key={idx} className="text-lg text-gray-600 mb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <p className="mt-4 text-lg text-gray-700">
            By staying at Hotel Newtown, you acknowledge and agree to our policies and terms. We aim to provide a comfortable and enjoyable stay for all our guests!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Policies;
