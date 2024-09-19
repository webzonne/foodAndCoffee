import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import coffeeImage from "@/public/logo.png";
import { useState, useEffect } from "react";


// Importa los iconos de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMenuVisible(true);
    }, 100); // Retraso para dar un efecto más fluido
  }, []);

  return (
    <>
     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Fondo de la página */}
      <div className="bg-cover bg-center h-screen w-screen flex items-center justify-center" style={{ backgroundImage: `url('/coffee-background.png')` }}>

      {/* MENU */}
        <div className={`${
              menuVisible ? "animate-slideDown" : "opacity-0"
            } bg-white bg-opacity-70 rounded-lg shadow-lg p-6 md:p-8 lg:p-12 flex flex-col items-center max-w-md md:max-w-lg lg:w-1/2`}>
          {/* Logo */}
          <div className="mb-6">
            <Image src={coffeeImage} alt="Food & Coffee" width={120} height={120} className="md:w-40 md:h-40 lg:w-48 lg:h-48" />
          </div>

          {/* Botones */}
          <div className="space-y-4 w-full">
            {/* WHATSAPP */}
            <Link href="https://wa.me/your-whatsapp-link">
              <div className="bg-brown-custom text-white mt-2 px-4 py-3 md:px-6 md:py-2 rounded-full flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 cursor-pointer">
                <span>WHATSAPP</span>
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
            </Link>
              {/* UBICACION */}
            <Link href="https://facebook.com/your-page">
              <div className="bg-brown-custom text-white mt-2 px-4 py-3 md:px-6 md:py-2 rounded-full flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 cursor-pointer">
                <span>UBICACIÓN</span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
            </Link>

            <Link href="/ubicacion">
              <div className="bg-brown-custom text-white mt-2 px-4 py-3 md:px-6 md:py-2 rounded-full flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 cursor-pointer">
                <span>FACEBOOK</span>
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
