import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/MModal.module.css';

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

const RoomList = () => {
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
      Modal.setAppElement(appElement);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="p-2 " style={{ backgroundColor: '#6E6E61' }}>
      <h1 className="text-3xl font-bold text-white mb-8 text-center " style={{ fontFamily: 'Times New Roman, serif' }}>Our Favourite Rooms</h1>
      <Slider {...settings}>
        {rooms.map((room, index) => (
          <div key={index} className="bg-transparent p-6 rounded-lg shadow-lg m-2">
            <img src={room.image} alt={room.name} className="w-full h-48 object-contain mb-4 rounded-md" />
            <h2 className="text-2xl font-bold text-white mb-2">{room.name}</h2>
            <p className="text-yellow-500 mb-4">From {room.price} /night </p>
            <button onClick={() => openModal(room)} className="text-blue-300 font-bold underline">Room details</button>
          </div>
        ))}
      </Slider>

      {selectedRoom && (
        <Modal
          isOpen={!!selectedRoom}
          onRequestClose={closeModal}
          contentLabel="Room Details"
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <div className="p-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedRoom.name}</h2>
              <button onClick={closeModal} className={styles['close-button']}>&times;</button>
            </div>
            <Carousel showThumbs={false} className={styles.carousel}>
              {selectedRoom.images.map((image, idx) => (
                <div key={idx}>
                  <img src={image} alt={`${selectedRoom.name} ${idx + 1}`} style={{ width: '100%', height: '48vh', objectFit: 'contain' }} className="rounded-md" />
                </div>
              ))}
            </Carousel>
            <p className="mt-4">{selectedRoom.description}</p>
            <h1 className="room-highlights-title">Room Highlights</h1>
            <ul className="room-highlights-list">
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
    </div>
  );
};

export default RoomList;
