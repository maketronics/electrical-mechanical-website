"use client";
import { useState } from "react";

export default function FAQAccordion({ title, faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
          {title}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <span className="text-yellow-400 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="text-gray-300 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}