
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav = () => {
  const [activePath, setActivePath] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { pathname } = window.location;
      setActivePath(pathname);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="shadow-md fixed w-full z-50" style={{ backgroundColor: '#111111' }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-0">
          <Link href="/" legacyBehavior>
            <a>
              <Image src="/New Town Hotel logo web.png" alt="New Town Hotel Logo" width={100} height={60} />
            </a>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="text-white">
            {isDropdownOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <ul className={`nav-links flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 ${isDropdownOpen ? 'flex dropdown-open' : 'hidden'}`}>
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
      <style jsx>{`
        @media (orientation: portrait) {
          .nav-links {
            padding-left: 1rem;
            width: 100%;
          }
          .nav-links li {
            width: 100%;
            text-align: left;
          }
          .nav-links li a {
            display: block;
            padding: 10px;
          }
        }

        @media (orientation: landscape) {
          .nav-links {
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-links li {
            width: auto;
          }
          .nav-links li a {
            display: inline-block;
            padding: 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
