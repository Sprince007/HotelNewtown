import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { pathname } = window.location;
      setActivePath(pathname);
    }
  }, []);

  return (
    <nav className="shadow-md fixed w-full z-50" style={{ backgroundColor: '#111111' }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-0">
          <Link href="/" legacyBehavior>
            <a>
              <Image src="/New Town Hotel logo web.png" alt="New Town Hotel Logo" width={100} height={60} />
            </a>
          </Link>
          <div className="text-2xl font-bold text-white">
            <Link href="/" legacyBehavior>
              <a></a>
            </Link>
          </div>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" legacyBehavior>
              <a className={`text-white hover:text-yellow-600 ${activePath === '/' ? 'text-yellow-600' : ''}`}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className={`text-white hover:text-yellow-600 ${activePath === '/about' ? 'text-yellow-600' : ''}`}>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/rooms" legacyBehavior>
              <a className={`text-white hover:text-yellow-600 ${activePath === '/rooms' ? 'text-yellow-600' : ''}`}>Rooms</a>
            </Link>
          </li>
          <li>
            <Link href="/services" legacyBehavior>
              <a className={`text-white hover:text-yellow-600 ${activePath === '/services' ? 'text-yellow-600' : ''}`}>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/faq" legacyBehavior>
              <a className={`text-white hover:text-yellow-600 ${activePath === '/faq' ? 'text-yellow-600' : ''}`}>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="/policies" legacyBehavior>
              <a className={`text-white hover:text-yellow-600 ${activePath === '/policies' ? 'text-yellow-600' : ''}`}>Policies</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className={`text-white hover:text-yellow-600 ${activePath === '/contact' ? 'text-yellow-600' : ''}`}>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
