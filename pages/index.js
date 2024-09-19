import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import coffeeImage from "@/public/logo.png";

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
  return (
    <>
     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Fondo de la página */}
      <div className="bg-cover bg-center h-screen w-screen flex items-center justify-center" style={{ backgroundImage: `url('/coffee-background.png')` }}>
        <div className="bg-white bg-opacity-70 rounded-lg shadow-lg p-6 md:p-8 lg:p-12 flex flex-col items-center max-w-md md:max-w-lg lg:max-w-xl">
          {/* Logo */}
          <div className="mb-6">
            <Image src={coffeeImage} alt="Food & Coffee" width={120} height={120} className="md:w-40 md:h-40 lg:w-48 lg:h-48" />
          </div>

          {/* Botones */}
          <div className="space-y-4 w-full">
            <Link href="https://wa.me/your-whatsapp-link">
              <div className="border bg-brown-custom text-white px-4 py-3 md:px-6 md:py-4 rounded-full flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 cursor-pointer">
                <span>WHATSAPP</span>
                <i className="fab fa-whatsapp"></i>
              </div>
            </Link>

            <Link href="https://facebook.com/your-page">
              <div className="border bg-brown-custom text-white px-4 py-3 md:px-6 md:py-4 rounded-full flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 cursor-pointer">
                <span>FACEBOOK</span>
                <i className="fab fa-facebook"></i>
              </div>
            </Link>

            <Link href="/galeria">
              <div className="border bg-brown-custom text-white px-4 py-3 md:px-6 md:py-4 rounded-full flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 cursor-pointer">
                <span>GALERÍA</span>
                <i className="fas fa-images"></i>
              </div>
            </Link>

            <Link href="/ubicacion">
              <div className="border bg-brown-custom text-white px-4 py-3 md:px-6 md:py-4 rounded-full flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 cursor-pointer">
                <span>UBICACIÓN</span>
                <i className="fas fa-map-marker-alt"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
