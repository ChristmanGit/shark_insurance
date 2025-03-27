
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-shark-200 last:border-b-0">
      <button
        className="w-full py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-shark-900">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-ocean-600">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-shark-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How likely am I to be attacked by a shark in my office?",
      answer: "While statistically rare, our proprietary risk assessment algorithm suggests that office shark attacks are increasing by 0.0003% annually. Our coverage ensures you're protected in the unlikely but possible event that a shark finds its way into your workspace, especially near water coolers where they're known to congregate."
    },
    {
      question: "Does my policy cover attacks from specific shark species?",
      answer: "Yes, our Standard and Premium plans cover attacks from all documented shark species, including but not limited to great whites, hammerheads, and the elusive elevator shark. Basic plans exclude coverage for bull sharks in boardrooms and mako sharks in mall food courts."
    },
    {
      question: "How does the shark detection system work?",
      answer: "Our revolutionary Shark Detection System™ uses a combination of proprietary technology, including motion sensors and advanced algorithms, to detect shark movement patterns within a 100-mile radius. Premium members receive real-time alerts via our mobile app, allowing them approximately 17 minutes to reach the nearest shark-proof shelter."
    },
    {
      question: "What should I do if I encounter a shark in my home?",
      answer: "Stay calm and remember your training (Premium members only). Activate your Shark Alert button on the mobile app immediately. Move slowly toward the nearest shark-safe room, typically bathrooms due to their lack of entry points. If you haven't designated a shark-safe room, our emergency response team will provide live guidance until help arrives."
    },
    {
      question: "Are there any exclusions to my coverage?",
      answer: "Coverage excludes intentional shark provocation, shark-related pranks, and incidents occurring while wearing shark-attracting cologne. Additionally, coverage may be limited if you're attacked while wearing a seal costume or carrying open containers of chum. Please review your policy documents for a complete list of exclusions."
    },
    {
      question: "How quickly can I file a claim after a shark attack?",
      answer: "Claims can be filed immediately after ensuring your personal safety. Our mobile app features an emergency claim button that simultaneously alerts our response team, begins your claim process, and activates nearby shark deterrent systems. Premium members enjoy priority claim processing, often receiving preliminary approvals before the shark has even left the premises."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h6 className="inline-block bg-ocean-100 text-ocean-800 px-4 py-1 rounded-full text-sm font-medium mb-4 animate-on-scroll">Questions & Answers</h6>
          <h2 className="section-heading mx-auto text-center after:mx-auto animate-on-scroll">Frequently Asked Questions</h2>
          <p className="section-subheading animate-on-scroll animate-delay-100">
            Get answers to the most common questions about our unusual but essential insurance coverage.
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass-card">
          <div className="p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-shark-600 mb-6 animate-on-scroll">
            Still have questions about protecting yourself from improbable shark encounters?
          </p>
          <a 
            href="#contact" 
            className="shark-button inline-block animate-on-scroll animate-delay-200"
          >
            Contact Our Shark Specialists
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
