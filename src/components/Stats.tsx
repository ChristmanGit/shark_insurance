
import React, { useEffect, useState, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [counters, setCounters] = useState({
    claims: 0,
    customers: 0,
    locations: 0,
    specialists: 0
  });
  
  const targets = {
    claims: 2743,
    customers: 10000,
    locations: 127,
    specialists: 57
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      
      const progress = frame / totalFrames;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      
      setCounters({
        claims: Math.floor(easeOutQuad * targets.claims),
        customers: Math.floor(easeOutQuad * targets.customers),
        locations: Math.floor(easeOutQuad * targets.locations),
        specialists: Math.floor(easeOutQuad * targets.specialists)
      });

      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-ocean-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 transform -translate-y-1/2 opacity-5" width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="350" fill="none" stroke="white" strokeWidth="50" />
        </svg>
        <svg className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 opacity-5" width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="250" fill="none" stroke="white" strokeWidth="50" />
        </svg>
        
        {/* Animated shark fin */}
        <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
          <div className="w-20 h-16 bg-ocean-800 absolute left-0 bottom-0 transform -translate-y-1/2 rotate-45 animate-shark-swim"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h6 className="inline-block bg-ocean-800 text-ocean-100 px-4 py-1 rounded-full text-sm font-medium mb-4">By The Numbers</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Shark Protection Statistics</h2>
          <p className="text-xl text-ocean-100 mb-10 max-w-2xl mx-auto">
            Our company continues to grow as unexpected shark encounters increase worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card bg-ocean-800/50 p-8 text-center transform transition-transform duration-500 hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {counters.claims.toLocaleString()}
            </div>
            <div className="text-ocean-100">Claims Processed</div>
          </div>
          
          <div className="glass-card bg-ocean-800/50 p-8 text-center transform transition-transform duration-500 hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {counters.customers.toLocaleString()}+
            </div>
            <div className="text-ocean-100">Protected Customers</div>
          </div>
          
          <div className="glass-card bg-ocean-800/50 p-8 text-center transform transition-transform duration-500 hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {counters.locations.toLocaleString()}
            </div>
            <div className="text-ocean-100">Safe Zones Established</div>
          </div>
          
          <div className="glass-card bg-ocean-800/50 p-8 text-center transform transition-transform duration-500 hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {counters.specialists.toLocaleString()}
            </div>
            <div className="text-ocean-100">Shark Specialists</div>
          </div>
        </div>
        
        {/* Shark attack type distribution */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-10">Shark Attack Distribution by Location</h3>
          
          <div className="glass-card bg-ocean-800/50 p-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-ocean-100">Open Water</span>
                  <span className="text-white font-medium">43%</span>
                </div>
                <div className="w-full h-4 bg-ocean-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-ocean-400 rounded-full"
                    style={{ width: isVisible ? '43%' : '0%', transition: 'width 1.5s ease-out' }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-ocean-100">Shopping Centers</span>
                  <span className="text-white font-medium">27%</span>
                </div>
                <div className="w-full h-4 bg-ocean-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-ocean-400 rounded-full"
                    style={{ width: isVisible ? '27%' : '0%', transition: 'width 1.5s ease-out 0.3s' }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-ocean-100">Office Buildings</span>
                  <span className="text-white font-medium">18%</span>
                </div>
                <div className="w-full h-4 bg-ocean-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-ocean-400 rounded-full"
                    style={{ width: isVisible ? '18%' : '0%', transition: 'width 1.5s ease-out 0.6s' }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-ocean-100">Residential Homes</span>
                  <span className="text-white font-medium">8%</span>
                </div>
                <div className="w-full h-4 bg-ocean-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-ocean-400 rounded-full"
                    style={{ width: isVisible ? '8%' : '0%', transition: 'width 1.5s ease-out 0.9s' }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-ocean-100">Airborne Encounters</span>
                  <span className="text-white font-medium">4%</span>
                </div>
                <div className="w-full h-4 bg-ocean-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-ocean-400 rounded-full"
                    style={{ width: isVisible ? '4%' : '0%', transition: 'width 1.5s ease-out 1.2s' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
