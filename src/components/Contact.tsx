
import React, { useState } from 'react';
import { Check, MapPin, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    sharkEncounters: 'none',
    acceptTerms: false
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success('Thank you for your interest in Shark Insurance!', {
        description: 'A shark specialist will contact you shortly.',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-shark-50 bg-ocean-pattern relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h6 className="inline-block bg-ocean-100 text-ocean-800 px-4 py-1 rounded-full text-sm font-medium mb-4 animate-on-scroll">Get In Touch</h6>
          <h2 className="section-heading mx-auto text-center after:mx-auto animate-on-scroll">Contact Our Shark Specialists</h2>
          <p className="section-subheading animate-on-scroll animate-delay-100">
            Have questions or ready to protect yourself from improbable shark encounters? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto animate-on-scroll animate-delay-200">
          <div className="md:col-span-2">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold text-shark-900 mb-6">Get Shark Protection Today</h3>
              
              <p className="text-shark-700 mb-8">
                Our shark specialists are standing by to answer your questions and help you choose the right protection plan for your specific shark-encounter risk profile.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-ocean-100 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-ocean-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-shark-900">Headquarters</h4>
                    <p className="text-shark-700">1234 Shark Detection Avenue<br />Oceanview, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ocean-100 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-ocean-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-shark-900">Email Us</h4>
                    <p className="text-shark-700">contact@sharkinsurance.example<br />claims@sharkinsurance.example</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ocean-100 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-ocean-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-shark-900">Call Us</h4>
                    <p className="text-shark-700">Shark Hotline: (555) 123-4567<br />Emergency: (555) 911-SHARK</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-shark-100">
                <h4 className="font-semibold text-shark-900 mb-4">Business Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-shark-700">
                  <div>Monday - Friday</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div>Saturday</div>
                  <div>10:00 AM - 4:00 PM</div>
                  <div>Sunday</div>
                  <div>Closed (Sharks Rest)</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="glass-card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-shark-900 mb-3">Thank You!</h3>
                  <p className="text-shark-700 mb-6">Your message has been received. A shark specialist will contact you shortly to discuss your protection options.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="shark-button"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-shark-900 mb-6">Send Us a Message</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-shark-800 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-shark-200 focus:border-ocean-500 focus:ring focus:ring-ocean-200 focus:ring-opacity-50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-shark-800 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-shark-200 focus:border-ocean-500 focus:ring focus:ring-ocean-200 focus:ring-opacity-50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-shark-800 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-shark-200 focus:border-ocean-500 focus:ring focus:ring-ocean-200 focus:ring-opacity-50 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="sharkEncounters" className="block text-shark-800 mb-2">Previous Shark Encounters</label>
                      <select
                        id="sharkEncounters"
                        name="sharkEncounters"
                        value={formState.sharkEncounters}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-shark-200 focus:border-ocean-500 focus:ring focus:ring-ocean-200 focus:ring-opacity-50 transition-colors"
                      >
                        <option value="none">None</option>
                        <option value="water">In Water</option>
                        <option value="land">On Land</option>
                        <option value="air">In Air</option>
                        <option value="multiple">Multiple Locations</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-shark-800 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-shark-200 focus:border-ocean-500 focus:ring focus:ring-ocean-200 focus:ring-opacity-50 transition-colors"
                      placeholder="Tell us about your concerns or insurance needs..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formState.acceptTerms}
                      onChange={handleCheckboxChange}
                      required
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="acceptTerms" className="text-shark-700 text-sm">
                      I acknowledge that sharks may appear anywhere at any time, and accept the terms of Shark Insurance's privacy policy. I understand this is a parody website.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="shark-button w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : "Submit Request"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
