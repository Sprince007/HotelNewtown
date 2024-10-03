"use client";
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/MModal.module.css'; // Import the CSS for the modal

const rooms = [
  {
    name: 'Room 10k',
    price: '10,000 FCFA',
    image: '/FormatFactoryIMG_0049.jpg',
    description: 'A comfortable room with basic amenities.',
    images: ['/FormatFactoryIMG_0049.jpg', '/FormatFactoryIMG_0050.jpg', '/FormatFactoryIMG_0052.jpg', '/FormatFactoryIMG_0053.jpg', '/FormatFactoryIMG_0075.jpg'],
  },
  {
    name: 'Room 15k',
    price: '15,000 FCFA',
    image: '/FormatFactoryIMG_0026.jpg',
    description: 'A spacious room with additional features.',
    images: ['/FormatFactoryIMG_0026.jpg', '/FormatFactoryIMG_0028.jpg', '/FormatFactoryIMG_0031.jpg', '/FormatFactoryIMG_0047.jpg'],
  },
  {
    name: 'Room 20k',
    price: '20,000 FCFA',
    image: '/FormatFactoryIMG_0080.jpg',
    description: 'A comfortable room with basic amenities.',
    images: ['/FormatFactoryIMG_0080.jpg', '/FormatFactoryIMG_0079.jpg', '/FormatFactoryIMG_0083.jpg', '/FormatFactoryIMG_0088.jpg'],
  },
  {
    name: 'Room 25k',
    price: '25,000 FCFA',
    image: '/FormatFactoryIMG_0064.jpg',
    description: 'An Advanced room with moderate amenities.',
    images: ['/FormatFactoryIMG_0064.jpg', '/FormatFactoryIMG_0062.jpg', '/FormatFactoryIMG_0065.jpg', '/FormatFactoryIMG_0061.jpg', '/FormatFactoryIMG_0063.jpg'],
  },
  {
    name: 'Room 30k',
    price: '30,000 FCFA',
    image: '/FormatFactoryIMG_0095.jpg',
    description: 'A Perplexing room with Advanced amenities.',
    images: ['/FormatFactoryIMG_0095.jpg', '/FormatFactoryIMG_0090.jpg', '/FormatFactoryIMG_0091.jpg', '/FormatFactoryIMG_0100.jpg', '/FormatFactoryIMG_0098.jpg'],
  },
  {
    name: 'Room 35k',
    price: '35,000 FCFA',
    image: '/FormatFactoryIMG_0107.jpg',
    description: 'A luxurious room with premium amenities.',
    images: ['/FormatFactoryIMG_0107.jpg', '/FormatFactoryIMG_0108.jpg', '/FormatFactoryIMG_0109.jpg'],
  },
];

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const openModal = (room) => {
    setSelectedRoom(room);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  useEffect(() => {
    const appElement = document.getElementById('__next');
    if (appElement) {
      Modal.setAppElement(appElement); // This line ensures the modal works with accessibility in mind
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
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
      <div className="flex-1 p-8 bg-gradient-to-r from-cream via-cream-light to-gray-light mt-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 fade-in">Our Rooms</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
                <img src={room.image} alt={room.name} className="w-full h-48 object-contain mb-4 rounded-md transition duration-500 ease-in-out transform hover:scale-110" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2 fade-in">{room.name}</h2>
                <p className="text-yellow-600 mb-4">Price: {room.price} /night</p>
                <button onClick={() => openModal(room)} className="text-gray-800 font-bold underline">Room details</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedRoom && (
        <Modal
          isOpen={!!selectedRoom}
          onRequestClose={closeModal}
          contentLabel="Room Details"
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <div className="p-4 bg-cream rounded-lg slide-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{selectedRoom.name}</h2>
              <button onClick={closeModal} className={styles['close-button']}>&times;</button>
            </div>
            <Carousel showThumbs={false} className={styles.carousel}>
              {selectedRoom.images.map((image, idx) => (
                <div key={idx}>
                  <img src={image} alt={`${selectedRoom.name} ${idx + 1}`} style={{ width: '100%', height: '48vh', objectFit: 'contain' }} className="rounded-md" />
                </div>
              ))}
            </Carousel>
            <p className="mt-4 text-gray-800">{selectedRoom.description}</p>
            <h3 className="text-xl font-bold text-gray-800 mt-4">Room Highlights</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Toiletries: Soap, towel, etc.</li>
              <li>Beverages: Coffee/tea, water, mini fridge, etc.</li>
              <li>Electronics: Flat TV screen, air conditioner, ironing, etc.</li>
              <li>Bed Comfort: Plush beddings, high-quality linens, etc.</li>
              <li>Productivity: High-speed Wi-Fi, in-room internet access, etc.</li>
              <li>Food: Room service</li>
            </ul>
          </div>
        </Modal>
      )}
      <Footer />
    </div>
  );
};

export default Rooms;
