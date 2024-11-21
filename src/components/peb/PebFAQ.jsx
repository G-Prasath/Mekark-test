import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import Heading from "../Common/Heading/Heading";

const PebFAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const data = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      question: "Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ]

  return (
    <main className="flex flex-col items-center justify-center py-28 px-5 bg-[#f5fbff]">
      <div className="bg-white rounded-3xl lg:p-12 w-full mx-auto">
        <Heading title="Frequently Asked Questions" secTitle="FAQ" />
        {data.map((faq, index) => (
          <details key={index} className="border-b border-blue-200 mb-4 p-4">
            <summary
              className="flex justify-between items-center cursor-pointer text-blue-900 text-lg"
              onClick={() => handleToggle(index)}
            >
              <span>{faq.question}</span>
              <span className="ml-2 transition-transform duration-200 ease-in-out">
                <AiOutlineDown
                  className={`transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </summary>
            {openIndex === index && (
              <p className="text-gray-600 mt-2 bg-[#f5fbff] rounded-lg p-3">
                {faq.answer}
              </p>
            )}
          </details>
        ))}
      </div>
    </main>
  );
};

export default PebFAQ;
