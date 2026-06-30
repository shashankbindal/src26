import React, { useState } from 'react'
import { useReveal } from './useReveal.js'
import './Faq.css'

const faqData = [
  {
    question: "Where is RGIPT?",
    answer: "RGIPT is located in Jais, Uttar Pradesh, India. nestled between the historic cities of Amethi (approximately 32 km away) and Rae Bareli (approximately 30 km away). The institute's sprawling green campus provides a serene and intellectually stimulating environment while remaining well-connected to major cities such as Lucknow, Prayagraj, and Varanasi, making it an ideal destination for AIChE India SRC 2026."
  },
  {
    question: "Who can participate in SRC 2026?",
    answer: "Undergraduate and postgraduate students from chemical engineering and allied fields across India are welcome to participate in SRC 2026."
  },
  {
    question: "How do I register?",
    answer: "Head to the Registration page, pick the event(s) you want to compete in, fill in your (or your team's) details, and submit — you'll see your registration status and any pending steps right there."
  },
  {
    question: "What events can I take part in?",
    answer: "SRC 2026 features five flagship events — Chem-E-Car, Chem-E-Jeopardy, Technical Paper Presentation, Poster Presentation, and a K-12 outreach track. Visit the Events page for full details and chairs for each."
  },
  {
    question: "Who do I contact for help?",
    answer: "Reach out to the AIChE RGIPT Student Chapter at aiche@rgipt.ac.in for any questions about registration, events, or logistics."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, isVisible] = useReveal(0.1);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section" ref={ref}>
      <div className={`faq-header reveal ${isVisible ? 'visible' : ''}`}>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know about SRC '26</p>
      </div>
      
      <div className="faq-list">
        {faqData.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={index} 
              className={`faq-item ${isActive ? 'active' : ''} reveal reveal-d${index + 2} ${isVisible ? 'visible' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
                aria-expanded={isActive}
              >
                <span>{item.question}</span>
                <span className="faq-icon"></span>
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Faq
