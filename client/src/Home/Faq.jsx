import React, { useState } from 'react'
import './Faq.css'

const faqData = [
  {
    question: "How do I register for the conference?",
    answer: "You can register through the 'Dashboard' portal after creating an account. Payment verification is required to confirm your seat."
  },
  {
    question: "Is accommodation provided?",
    answer: "Yes, we provide accommodation for all non-local participants within the campus hostels. You must opt-in for accommodation during the registration process."
  },
  {
    question: "Can I submit more than one paper?",
    answer: "Participants are allowed to submit a maximum of two papers as the primary author, provided they are in completely different tracks or domains."
  },
  {
    question: "Are there any prerequisites for workshops?",
    answer: "Most workshops are beginner-friendly. However, any specific prerequisites (like basic Python knowledge or pre-installed software) will be clearly mentioned in the event description."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-header">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know about SRC '26</p>
      </div>
      
      <div className="faq-list">
        {faqData.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div key={index} className={`faq-item ${isActive ? 'active' : ''}`}>
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
