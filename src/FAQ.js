import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

function FAQ() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const answerRefs = useRef([]);

  const faqs = [
    {
      question: 'What is Gamesphere?',
      answer: 'Gamesphere is a gaming forum where enthusiasts can discuss games, hardware, esports, and more.',
    },
    {
      question: 'How do I create a new thread?',
      answer: 'To create a new thread, navigate to the desired forum category and click on the "Create Thread" button. Fill in the title, tags, and content, and click "Post". Ensure the title and content have meaningful text.',
    },
    {
      question: 'How do I comment on a thread?',
      answer: 'To comment on a thread, scroll down to the comment section, type your comment in the provided text area, and click the send icon. Make sure your comment is relevant and adheres to the community guidelines.',
    },
    {
      question: 'What are the guidelines for posting threads and comments?',
      answer: 'When posting threads and comments, ensure they are respectful, relevant, and free from offensive language. Avoid spam, and stay on topic. Review our community guidelines for more details.',
    },
    {
      question: 'How do I use the search bar?',
      answer: 'To use the search bar, click on the search bar and write the thread title you want to view.',
    },
    {
      question: 'How do I use the advanced search?',
      answer: 'To use the advanced search, click on the search bar dropdown and select "Advanced". On the advanced search page, you can filter results by games, categories, popularity, date posted, platforms, and reply count.',
    },
    {
      question: 'How is my data protected?',
      answer: 'We take data protection and privacy seriously. Your personal information is stored securely and is not shared with third parties without your consent. Refer to our privacy policy for detailed information.',
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    if (openQuestionIndex !== index) {
      setTimeout(() => {
        answerRefs.current[index].focus();
      }, 100);
    }
  };

  return (
    <div className="faq-page">
      <div className="breadcrumbs">
        <Link to="/">Home</Link> &gt;<span>FAQ</span>
      </div>
      <div className="faq-container">
        <h1 className="faq-header">Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openQuestionIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <span className="faq-toggle-icon">
                  {openQuestionIndex === index ? '-' : '+'}
                </span>
              </button>
              {openQuestionIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  tabIndex="-1"
                  ref={(el) => (answerRefs.current[index] = el)}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
