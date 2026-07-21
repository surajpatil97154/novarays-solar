'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Image src="/images/logo.svg" alt="NovaRays" width={160} height={50} className="mb-4" />
            <p className="text-gray-400 text-sm">Premium solar energy solutions for a sustainable future.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#benefits" className="hover:text-primary">Benefits</a></li>
              <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Press</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@novarays.com</li>
              <li>📞 1-800-SOLAR-99</li>
              <li>📍 Pan-India Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 NovaRays. All rights reserved. | <a href="#" className="hover:text-primary">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  )
}
