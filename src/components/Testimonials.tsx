
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Denver, CO",
      occupation: "Marketing Executive",
      quote: "I never thought I'd encounter a shark in the dairy aisle at my local supermarket. Thanks to Shark Insurance, my medical bills were covered and I received a complimentary shopping cart with shark-proof wheels.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      location: "Chicago, IL",
      occupation: "Software Developer",
      quote: "The shark that emerged from my office printer was absolutely unexpected. Shark Insurance not only covered my therapy sessions but also provided me with a shark-repellent keyboard. Five stars!",
      image: "/placeholder.svg"
    },
    {
      name: "Jessica Williams",
      location: "Phoenix, AZ",
      occupation: "Elementary School Teacher",
      quote: "My classroom was the last place I expected to be ambushed by a bull shark. Shark Insurance's rapid response team arrived before the paramedics! My students now feel safe knowing we're protected.",
      image: "/placeholder.svg"
    },
    {
      name: "Robert Garcia",
      location: "Miami, FL",
      occupation: "Taxi Driver",
      quote: "A hammerhead shark somehow got into the trunk of my taxi. Thanks to my Premium plan, Shark Insurance handled everything and even installed a shark detection system in my vehicle!",
      image: "/placeholder.svg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

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

  const handlePrev = () => {
    setActiveIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h6 className="inline-block bg-ocean-100 text-ocean-800 px-4 py-1 rounded-full text-sm font-medium mb-4 animate-on-scroll">Success Stories</h6>
          <h2 className="section-heading mx-auto text-center after:mx-auto animate-on-scroll">Shark Attack Survivors</h2>
          <p className="section-subheading animate-on-scroll animate-delay-100">
            Real stories from real people who survived improbable shark encounters thanks to our protection.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative animate-on-scroll animate-delay-200">
          {/* Decoration elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-ocean-100 rounded-full"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-ocean-100 rounded-full"></div>
          <div className="absolute top-1/4 -right-3 w-8 h-8 bg-ocean-200 rounded-full"></div>
          <div className="absolute bottom-1/4 -left-3 w-8 h-8 bg-ocean-200 rounded-full"></div>
          
          {/* The testimonial slider */}
          <div className="glass-card relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                    <div className="md:w-1/3 flex justify-center">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <div className="w-full h-full bg-ocean-200 flex items-center justify-center text-ocean-600 text-2xl font-bold">
                            {testimonial.name.charAt(0)}
                          </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-ocean-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                          <Quote size={18} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 text-center md:text-left">
                      <blockquote className="text-lg italic text-shark-700 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="font-semibold text-shark-900">{testimonial.name}</div>
                      <div className="text-sm text-shark-600">{testimonial.occupation}, {testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Controls */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-ocean-500 w-6' : 'bg-shark-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-shark-800 rounded-full p-2 shadow-subtle transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-shark-800 rounded-full p-2 shadow-subtle transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Stats & Trust indicators */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 text-center animate-on-scroll animate-delay-300">
            <div className="text-3xl font-bold text-ocean-600 mb-2">98%</div>
            <div className="text-shark-700">Customer satisfaction rate after shark encounters</div>
          </div>
          
          <div className="glass-card p-6 text-center animate-on-scroll animate-delay-400">
            <div className="text-3xl font-bold text-ocean-600 mb-2">24/7</div>
            <div className="text-shark-700">Support from our shark response specialists</div>
          </div>
          
          <div className="glass-card p-6 text-center animate-on-scroll animate-delay-500">
            <div className="text-3xl font-bold text-ocean-600 mb-2">1,500+</div>
            <div className="text-shark-700">Successful claims processed annually</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
