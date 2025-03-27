
import React, { useEffect, useState } from 'react';
import { Check, Info } from 'lucide-react';

const Coverage = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('standard');

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
  
  const plans = {
    basic: {
      name: 'Basic',
      price: '$9.99',
      description: 'Essential protection from common shark encounters',
      features: [
        'Ocean shark attack coverage',
        'Emergency response hotline',
        'Basic medical coverage',
        'Shark repellent (10% discount)',
        'Digital shark detection map'
      ],
      limitations: [
        'Land shark coverage not included',
        'Air shark coverage not included',
        'Limited to $10,000 in claims'
      ]
    },
    standard: {
      name: 'Standard',
      price: '$19.99',
      description: 'Comprehensive protection for the shark-conscious individual',
      features: [
        'All Basic features',
        'Land shark attack coverage',
        'Coverage in public buildings',
        'Shark deterrent device included',
        'Real-time shark proximity alerts',
        'Up to $50,000 in claims'
      ],
      limitations: [
        'Air shark coverage limited',
        'No coverage for exotic shark species'
      ]
    },
    premium: {
      name: 'Premium',
      price: '$39.99',
      description: 'Ultimate protection from sharks wherever they may appear',
      features: [
        'All Standard features',
        'Air shark attack coverage',
        'Complete coverage in all environments',
        'Advanced shark deterrent system',
        'Shark-proof shelter consultation',
        'Priority emergency response',
        'Unlimited claim amount',
        'Annual shark awareness training'
      ],
      limitations: []
    }
  };

  return (
    <section id="coverage" className="py-20 bg-shark-50 bg-ocean-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h6 className="inline-block bg-ocean-100 text-ocean-800 px-4 py-1 rounded-full text-sm font-medium mb-4 animate-on-scroll">Coverage Options</h6>
          <h2 className="section-heading mx-auto text-center after:mx-auto animate-on-scroll">Protection Plans</h2>
          <p className="section-subheading animate-on-scroll animate-delay-100">
            Choose the level of shark protection that's right for you and your family.
          </p>
        </div>

        {/* Plan Selector */}
        <div className="max-w-3xl mx-auto mb-12 bg-white rounded-lg p-2 shadow-subtle animate-on-scroll">
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(plans).map(([key, plan]) => (
              <button
                key={key}
                className={`py-3 px-4 rounded-md text-center transition-all duration-300 ${
                  selectedPlan === key
                    ? 'bg-ocean-500 text-white shadow-sm'
                    : 'bg-white text-shark-700 hover:bg-shark-100'
                }`}
                onClick={() => setSelectedPlan(key)}
              >
                <div className="font-medium">{plan.name}</div>
                <div className={`text-sm ${selectedPlan === key ? 'text-white/80' : 'text-shark-500'}`}>
                  {plan.price}/mo
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Plan Features */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden animate-on-scroll animate-delay-200">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-shark-900">
                    {plans[selectedPlan as keyof typeof plans].name} Protection
                  </h3>
                  <p className="text-ocean-600 font-medium">
                    {plans[selectedPlan as keyof typeof plans].price}/month
                  </p>
                </div>
                <div className="bg-ocean-100 text-ocean-800 px-4 py-1 rounded-full text-sm font-medium">
                  {selectedPlan === 'premium' ? 'Most Popular' : 
                   selectedPlan === 'standard' ? 'Recommended' : 'Budget Friendly'}
                </div>
              </div>

              <p className="text-shark-600 mb-8">
                {plans[selectedPlan as keyof typeof plans].description}
              </p>

              <div className="space-y-3 mb-8">
                {plans[selectedPlan as keyof typeof plans].features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-1 bg-ocean-100 rounded-full p-1">
                      <Check size={16} className="text-ocean-600" />
                    </div>
                    <span className="text-shark-700">{feature}</span>
                  </div>
                ))}
              </div>

              {plans[selectedPlan as keyof typeof plans].limitations.length > 0 && (
                <div className="mb-8">
                  <h4 className="font-medium text-shark-800 mb-2 flex items-center">
                    <Info size={16} className="mr-2 text-shark-500" />
                    Limitations
                  </h4>
                  <ul className="space-y-2 text-sm text-shark-600 pl-6 list-disc">
                    {plans[selectedPlan as keyof typeof plans].limitations.map((limitation, index) => (
                      <li key={index}>{limitation}</li>
                    ))}
                  </ul>
                </div>
              )}

              <a 
                href="#contact" 
                className="shark-button inline-block w-full text-center"
              >
                Get {plans[selectedPlan as keyof typeof plans].name} Protection
              </a>
            </div>
          </div>
        </div>

        {/* Coverage Comparison */}
        <div className="mt-20 max-w-5xl mx-auto animate-on-scroll animate-delay-300">
          <h3 className="text-2xl font-bold text-shark-900 text-center mb-8">Coverage Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full shadow-subtle bg-white rounded-lg">
              <thead>
                <tr className="bg-shark-100">
                  <th className="py-4 px-6 text-left text-shark-800 font-medium">Coverage Feature</th>
                  <th className="py-4 px-6 text-center text-shark-800 font-medium">Basic</th>
                  <th className="py-4 px-6 text-center text-shark-800 font-medium">Standard</th>
                  <th className="py-4 px-6 text-center text-shark-800 font-medium">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-shark-200">
                  <td className="py-3 px-6 text-shark-700">Ocean Shark Coverage</td>
                  <td className="py-3 px-6 text-center text-shark-700">
                    <Check size={18} className="mx-auto text-green-500" />
                  </td>
                  <td className="py-3 px-6 text-center text-shark-700">
                    <Check size={18} className="mx-auto text-green-500" />
                  </td>
                  <td className="py-3 px-6 text-center text-shark-700">
                    <Check size={18} className="mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-shark-200">
                  <td className="py-3 px-6 text-shark-700">Land Shark Coverage</td>
                  <td className="py-3 px-6 text-center text-shark-700">
                    <span className="text-red-500">✕</span>
                  </td>
                  <td className="py-3 px-6 text-center text-shark-700">
                    <Check size={18} className="mx-auto text-green-500" />
                  </td>
                  <td className="py-3 px-6 text-center text-shark-700">
                    <Check size={18} className="mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-shark-200">
                  <td className="py-3 px-6 text-shark-700">Air Shark Coverage</td>
                  <td className="py-3 px-6 text-center text-shark-700">
                    <span className="text-red-500">✕</span>
                  </td>
                  <td className="py-3 px-6 text-center text-shark-700">
                    <span className="text-yellow-500">Limited</span>
                  </td>
                  <td className="py-3 px-6 text-center text-shark-700">
                    <Check size={18} className="mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-shark-200">
                  <td className="py-3 px-6 text-shark-700">Maximum Claim</td>
                  <td className="py-3 px-6 text-center text-shark-700">$10,000</td>
                  <td className="py-3 px-6 text-center text-shark-700">$50,000</td>
                  <td className="py-3 px-6 text-center text-shark-700">Unlimited</td>
                </tr>
                <tr className="border-b border-shark-200">
                  <td className="py-3 px-6 text-shark-700">Shark Repellent</td>
                  <td className="py-3 px-6 text-center text-shark-700">10% Discount</td>
                  <td className="py-3 px-6 text-center text-shark-700">Included</td>
                  <td className="py-3 px-6 text-center text-shark-700">Advanced System</td>
                </tr>
                <tr className="border-b border-shark-200">
                  <td className="py-3 px-6 text-shark-700">Emergency Response</td>
                  <td className="py-3 px-6 text-center text-shark-700">Standard</td>
                  <td className="py-3 px-6 text-center text-shark-700">Enhanced</td>
                  <td className="py-3 px-6 text-center text-shark-700">Priority</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 text-shark-700">Shark Training</td>
                  <td className="py-3 px-6 text-center text-shark-700">
                    <span className="text-red-500">✕</span>
                  </td>
                  <td className="py-3 px-6 text-center text-shark-700">
                    <span className="text-red-500">✕</span>
                  </td>
                  <td className="py-3 px-6 text-center text-shark-700">
                    <Check size={18} className="mx-auto text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Coverage;
