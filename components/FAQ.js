"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "How is TestRedact better than other redaction tools?",
    answer: <div className="space-y-2 leading-relaxed">Other tools are built for general redaction needs, which creates gaps that slow you down. Our tool is built specifically for redacting tests, which means you maximize speed & accuracy, comply with Circular 64 requirements, and get test-related feature improvements. </div>,
  },
  { 
    question: "What ways do you keep our tests secure?",
    answer: (
      <p>
        We're hosted securely on AWS. We support single sign-on, multi-factor auth, password protected tests, and document retention periods.
      </p>
    )
  },
  {
    question: "How accurate are your redactions?",
    answer: (
      <p>
        No solution is perfect. We are 99.9% accurate, which is why we still strongly encourage a human review workflow as best practice before finalizing and submitting to the US Copyright Office.
      </p>
    ),
  },
  { 
    question: "Can you redact manually if you need to?",
    answer: (
      <p>
        Yes, you can redact manually in the tool.
      </p>
    ),
  },
  {
    question: "Do I have to download anything?",
    answer: (
      <div className="space-y-2 leading-relaxed">No. TestRedact is web-based. You can use it from any modern browser including Chrome, Firefox, Edge, and Safari.</div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
