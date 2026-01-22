"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({
  items,
  className,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-lg overflow-hidden bg-white"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-accent focus:ring-inset"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-semibold text-navy pr-4">{item.question}</span>
            <ChevronDown
              className={cn(
                "flex-shrink-0 w-5 h-5 text-text-secondary transition-transform",
                openIndex === index && "transform rotate-180"
              )}
              aria-hidden="true"
            />
          </button>
          <div
            id={`faq-answer-${index}`}
            className={cn(
              "px-6 pb-4 text-text-secondary transition-all duration-300",
              openIndex === index ? "block" : "hidden"
            )}
            role="region"
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
