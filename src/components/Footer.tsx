import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/icons/Icon';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Studio 9 Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-playfair text-2xl font-bold text-white">
                Studio 9
              </span>
            </div>
            <p className="text-neutral-300 mb-4 max-w-md">
              Professional music education for all ages. We provide a nurturing
              environment where students can discover their musical potential
              and develop lifelong skills.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">Facebook</span>
                <Icon name="facebook" size={24} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">Instagram</span>
                <Icon name="instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">YouTube</span>
                <Icon name="youtube" size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/instructors"
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  Instructors
                </Link>
              </li>
              <li>
                <Link
                  href="/registration"
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-neutral-300">
              <p>123 Music Street</p>
              <p>Harmony City, HC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@studio9.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400">
            © 2024 Studio 9. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
}
