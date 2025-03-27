
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroElement) return;
      
      const { left, top, width, height } = heroElement.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const bgElement = heroElement.querySelector('.hero-bg') as HTMLElement;
      const contentElement = heroElement.querySelector('.hero-content') as HTMLElement;
      
      if (bgElement) {
        bgElement.style.transform = `translate(${moveX * -0.5}px, ${moveY * -0.5}px)`;
      }
      
      if (contentElement) {
        contentElement.style.transform = `translate(${moveX * 0.3}px, ${moveY * 0.3}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-ocean-50"
    >
      {/* Background with parallax effect */}
      <div className="hero-bg absolute inset-0 z-0 transition-transform duration-200 ease-out">
        <div className="absolute inset-0 bg-ocean-pattern opacity-70"></div>
        <div className="absolute right-0 bottom-0 w-[600px] h-[400px] transform translate-x-1/4 translate-y-1/4 bg-ocean-400 rounded-full filter blur-[150px] opacity-20"></div>
        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] transform -translate-x-1/3 translate-y-1/4 bg-ocean-500 rounded-full filter blur-[100px] opacity-20"></div>
      </div>
      
      {/* Shark silhouette */}
      <div className="absolute bottom-0 w-full overflow-hidden h-32 opacity-10">
        <div className="w-32 h-16 bg-shark-900 rounded-t-full transform translate-y-1/2 animate-shark-swim"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 text-center md:text-left">
          <div className="inline-block animate-fade-in-up">
            <span className="inline-block bg-ocean-100 text-ocean-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
              #1 Shark Attack Protection
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-shark-900 leading-tight animate-fade-in-up">
            Protection from sharks,<br/>
            <span className="text-ocean-600">wherever they find you</span>
          </h1>
          
          <p className="mt-6 text-xl text-shark-600 max-w-xl animate-fade-in-up [animation-delay:200ms]">
            Because sharks don't just attack in the ocean. They can find you anywhere – in shopping malls, office buildings, or even while you sleep.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="shark-button text-center animate-fade-in-up [animation-delay:400ms]">
              Get Protected Now
            </a>
            <a href="#coverage" className="bg-white text-ocean-600 border border-ocean-200 font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-ocean-50 active:scale-[0.98] text-center animate-fade-in-up [animation-delay:600ms]">
              View Coverage Options
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center md:justify-start gap-6 animate-fade-in-up [animation-delay:800ms]">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-ocean-200 flex items-center justify-center text-ocean-600 font-bold">J</div>
              <div className="w-10 h-10 rounded-full bg-ocean-300 flex items-center justify-center text-ocean-700 font-bold">S</div>
              <div className="w-10 h-10 rounded-full bg-ocean-400 flex items-center justify-center text-white font-bold">M</div>
            </div>
            <p className="text-shark-600 text-sm">
              <span className="font-semibold">1,000+</span> people protected from shark attacks this month
            </p>
          </div>
        </div>
        
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end animate-fade-in [animation-delay:300ms]">
          <div className="relative w-[300px] md:w-[400px]">
            <div className="absolute top-4 left-4 w-full h-full bg-ocean-200 rounded-xl transform rotate-6"></div>
            <div className="glass-card p-6 relative z-10">
              <div className="flex justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-shark-900">Premium Protection</h3>
                  <p className="text-sm text-shark-600">Comprehensive coverage</p>
                </div>
                <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 14C28 18.4183 24.4183 22 20 22C15.5817 22 12 18.4183 12 14C12 9.58172 15.5817 6 20 6C24.4183 6 28 9.58172 28 14Z" fill="#0EA5E9"/>
                  <path d="M26 14C26 17.3137 23.3137 20 20 20C16.6863 20 14 17.3137 14 14C14 10.6863 16.6863 8 20 8C23.3137 8 26 10.6863 26 14Z" fill="white"/>
                  <path d="M24 19L25 27H7L11 16L13 18L16 16L20 18L24 19Z" fill="#0EA5E9"/>
                  <path d="M15 14C15 15.1046 14.1046 16 13 16C11.8954 16 11 15.1046 11 14C11 12.8954 11.8954 12 13 12C14.1046 12 15 12.8954 15 14Z" fill="#000"/>
                </svg>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-shark-700">Ocean attack coverage</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-shark-700">Land shark protection</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-shark-700">Air shark defense</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-shark-700">24/7 Shark detection</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-shark-100">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-shark-600">Starting at</p>
                    <p className="text-2xl font-bold text-shark-900">$19.99<span className="text-sm font-normal text-shark-600">/mo</span></p>
                  </div>
                  <a href="#contact" className="shark-button text-sm">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
