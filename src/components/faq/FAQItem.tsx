'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItemData } from '@/types';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  item: FAQItemData;
}

export function FAQItem({ item }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-[#2A211D] bg-[#16110F] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#8C827A]/40 overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
        className="flex w-full items-center justify-between gap-4 p-6 sm:p-7 text-left transition-colors hover:bg-[#1E1714]/40"
      >
        <span className="font-sans text-base font-semibold text-[#E6E0DD] sm:text-lg">
          {item.question}
        </span>
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#2A211D] bg-[#1E1714] text-[#8C827A] transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#D97706] border-[#D97706]/40' : ''
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-question-${item.id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[#2A211D]/60"
          >
            <div className="px-6 pb-7 pt-5 sm:px-7 text-sm sm:text-base leading-relaxed text-[#8C827A]">
              <p className="font-sans whitespace-pre-line">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
