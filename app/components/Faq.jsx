'use client';
import { useState } from "react";

const Faq = () => {
    const faqs = [
        {
            question: "How does RecycleHub determine if an item is recyclable?",
            answer: "RecycleHub uses AI-powered image recognition and barcode scanning to analyze items and provide instant recyclability information."
        },
        {
            question: "Does RecycleHub work with local recycling guidelines?",
            answer: "Yes! Our app customizes recommendations based on your location, ensuring you follow the correct recycling rules in your area."
        },
        {
            question: "Can I shop for eco-friendly products using RecycleHub?",
            answer: "Absolutely! We feature a curated selection of sustainable products to help you make environmentally friendly shopping choices."
        },
        {
            question: "How do I dispose of electronic waste through RecycleHub?",
            answer: "You can schedule an e-waste pickup through our app, and we’ll ensure your old electronics are responsibly recycled."
        },
        {
            question: "Is there a reward system for recycling?",
            answer: "Yes! You can earn points for scanning and recycling items correctly, which can be redeemed for discounts and rewards."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <div>
        <div className="mt-10" id="Faq">
          <h2 className="text-6xl font-semibold font-poppins text-center mb-10 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent leading-tight">
            FAQ's
          </h2>
        </div>
        <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-4">
                    {activeIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Faq;