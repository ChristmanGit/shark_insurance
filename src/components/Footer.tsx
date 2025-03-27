
import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-shark-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold flex items-center space-x-2 mb-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 14C28 18.4183 24.4183 22 20 22C15.5817 22 12 18.4183 12 14C12 9.58172 15.5817 6 20 6C24.4183 6 28 9.58172 28 14Z" fill="#0EA5E9"/>
                <path d="M26 14C26 17.3137 23.3137 20 20 20C16.6863 20 14 17.3137 14 14C14 10.6863 16.6863 8 20 8C23.3137 8 26 10.6863 26 14Z" fill="white"/>
                <path d="M24 19L25 27H7L11 16L13 18L16 16L20 18L24 19Z" fill="#0EA5E9"/>
                <path d="M15 14C15 15.1046 14.1046 16 13 16C11.8954 16 11 15.1046 11 14C11 12.8954 11.8954 12 13 12C14.1046 12 15 12.8954 15 14Z" fill="#000"/>
              </svg>
              <span>Shark Insurance</span>
            </div>
            <p className="text-shark-300 mb-6">
              Providing peace of mind against improbable shark encounters since 2015. Because you never know when or where a shark might appear.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-shark-800 hover:bg-shark-700 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-shark-800 hover:bg-shark-700 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-shark-800 hover:bg-shark-700 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-shark-800 hover:bg-shark-700 p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-shark-300 hover:text-white flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#coverage" className="text-shark-300 hover:text-white flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Coverage Plans
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-shark-300 hover:text-white flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-shark-300 hover:text-white flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-shark-300 hover:text-white flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Coverage Areas</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-shark-300 hover:text-white flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Ocean Coverage
                </a>
              </li>
              <li>
                <a href="#" className="text-shark-300 hover:text-white flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Land Shark Protection
                </a>
              </li>
              <li>
                <a href="#" className="text-shark-300 hover:text-white flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Indoor Shark Defense
                </a>
              </li>
              <li>
                <a href="#" className="text-shark-300 hover:text-white flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Aerial Shark Coverage
                </a>
              </li>
              <li>
                <a href="#" className="text-shark-300 hover:text-white flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Exotic Shark Types
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-shark-300 mb-4">
              Subscribe to our newsletter for shark sighting alerts and safety tips.
            </p>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-shark-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-ocean-500"
              />
              <button className="bg-ocean-600 hover:bg-ocean-700 px-4 py-2 rounded-r-lg transition-colors">
                Sign Up
              </button>
            </div>
            <p className="text-shark-400 text-sm">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>

        <div className="border-t border-shark-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-shark-400 text-sm mb-4 md:mb-0">
            &copy; {year} Shark Insurance. All rights reserved. <span className="text-xs">This is a parody website.</span>
          </p>
          <div className="flex space-x-6 text-sm text-shark-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Legal Disclaimer</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-shark-500">
          <p>Made with <Heart size={14} className="inline text-ocean-500" /> by a team that has definitely not been attacked by sharks</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
