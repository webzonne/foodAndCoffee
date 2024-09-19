// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold">Food & Coffee</div>
      <div className="flex space-x-4">
        <Link href="#">
          <span className="text-gray-600 hover:text-black">WhatsApp</span>
        </Link>
        <Link href="#">
          <span className="text-gray-600 hover:text-black">Facebook</span>
        </Link>
        <Link href="#">
          <span className="text-gray-600 hover:text-black">Gallery</span>
        </Link>
        <Link href="#">
          <span className="text-gray-600 hover:text-black">Location</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
