
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h6 className="inline-block bg-ocean-100 text-ocean-800 px-4 py-1 rounded-full text-sm font-medium mb-4 animate-on-scroll">Our Mission</h6>
          <h2 className="section-heading mx-auto text-center after:mx-auto animate-on-scroll">Why Shark Insurance?</h2>
          <p className="section-subheading animate-on-scroll animate-delay-100">We're revolutionizing shark attack protection with our outlandish yet oddly compelling coverage options.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-shark-900 mb-3">Our Unlikely Beginning</h3>
              <p className="text-shark-600">Founded in 2015 by Lawrence Hammerstein after his unlikely encounter with a shark in an elevator at the Empire State Building, Shark Insurance was born from the absurd realization that sharks have evolved beyond their aquatic limitations.</p>
            </div>

            <div className="animate-on-scroll animate-delay-200">
              <h3 className="text-2xl font-bold text-shark-900 mb-3">Innovative Protection</h3>
              <p className="text-shark-600">Our team of marine biologists, conspiracy theorists, and insurance specialists have developed proprietary algorithms to assess your risk of shark encounters in everyday places – from office buildings to shopping malls.</p>
            </div>

            <div className="animate-on-scroll animate-delay-300">
              <h3 className="text-2xl font-bold text-shark-900 mb-3">Peace of Mind</h3>
              <p className="text-shark-600">While others live in blissful ignorance, our clients sleep soundly knowing they're protected against the improbable yet strangely specific threat of being attacked by a shark on dry land.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll animate-delay-400">
              <a href="#coverage" className="shark-button text-center">Explore Plans</a>
              <a href="#contact" className="bg-white text-ocean-600 border border-ocean-200 font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-ocean-50 active:scale-[0.98] text-center">
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative animate-on-scroll">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-ocean-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-subtle"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-ocean-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            
            <div className="relative glass-card p-8 backdrop-blur-lg border border-white/30 shadow-elevation">
              <div className="absolute -top-5 -right-5 bg-ocean-500 rounded-full w-20 h-20 flex items-center justify-center text-white font-bold text-xl">
                10k+
                <span className="absolute -bottom-2 text-xs font-normal">Protected</span>
              </div>

              <div className="flex items-center border-b border-shark-100 pb-4 mb-4">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="#0EA5E9"/>
                    <path d="M10 18L6 21V15L10 18Z" fill="#0EA5E9"/>
                    <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#0EA5E9" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-shark-900">Shark Radar System</h4>
                  <p className="text-sm text-shark-600">Proprietary technology that detects sharks in a 100-mile radius</p>
                </div>
              </div>

              <div className="flex items-center border-b border-shark-100 pb-4 mb-4">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#0EA5E9" strokeWidth="2"/>
                    <path d="M12 7V12L15 15" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-shark-900">24/7 Response Team</h4>
                  <p className="text-sm text-shark-600">On-call experts ready to intervene at a moment's notice</p>
                </div>
              </div>

              <div className="flex items-center border-b border-shark-100 pb-4 mb-4">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 11L12 4L19 11V20H5V11Z" stroke="#0EA5E9" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M9 16.5C9 15.1193 10.1193 14 11.5 14H12.5C13.8807 14 15 15.1193 15 16.5V20H9V16.5Z" fill="#0EA5E9"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-shark-900">Shark-Proof Shelters</h4>
                  <p className="text-sm text-shark-600">Designated safe zones in major metropolitan areas</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#0EA5E9"/>
                    <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#0EA5E9" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-shark-900">Anti-Shark Repellent</h4>
                  <p className="text-sm text-shark-600">Complimentary shark deterrent for all policyholders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
