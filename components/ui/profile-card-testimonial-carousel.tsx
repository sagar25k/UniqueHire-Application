"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselItem {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  mailUrl?: string;
}

export interface TestimonialCarouselProps {
  items: CarouselItem[];
  className?: string;
}

export function TestimonialCarousel({ items, className }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const count = items?.length ?? 0;

  useEffect(() => {
    if (count === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % count);
    }, 4500);
    return () => clearInterval(interval);
  }, [count]);

  // Fallback if empty (after hooks to preserve hook order)
  if (count === 0) return null;

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % items.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + items.length) % items.length
    );

  const currentTestimonial = items[currentIndex];

  const socialIcons = [
    { icon: Linkedin, url: currentTestimonial.linkedinUrl, label: "LinkedIn" },
    { icon: Github, url: currentTestimonial.githubUrl, label: "GitHub" },
    { icon: Mail, url: currentTestimonial.mailUrl, label: "Email" },
  ];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className='hidden md:flex relative items-center justify-center min-h-[470px] mt-10'>
        {/* Avatar */}
        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-neutral-800 flex-shrink-0 shadow-2xl relative z-0'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={470}
                height={470}
                className='w-full h-full object-cover'
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className='bg-white dark:bg-card rounded-3xl shadow-xl border border-border/50 p-10 ml-[-120px] z-10 max-w-xl flex-1'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className='mb-6'>
                <h2 className='text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight'>
                  {currentTestimonial.name}
                </h2>

                <p className='text-sm font-semibold tracking-widest uppercase text-[#FF6B00] mb-2'>
                  {currentTestimonial.title}
                </p>
                <div className="w-12 h-1 bg-[#043b73]/30 rounded-full" />
              </div>

              <p className='text-black dark:text-gray-300 text-lg leading-relaxed mb-8'>
                {currentTestimonial.description}
              </p>

              <div className='mt-8 pt-6 border-t border-border/40 flex justify-end space-x-4'>
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  url ? (
                    <Link
                      key={label}
                      href={url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-12 h-12 bg-gray-900 dark:bg-white/10 rounded-full flex items-center justify-center transition-colors hover:bg-[#043b73] dark:hover:bg-[#043b73] hover:scale-105 cursor-pointer'
                      aria-label={label}
                    >
                      <IconComponent className='w-5 h-5 text-white dark:text-white' />
                    </Link>
                  ) : null
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className='md:hidden max-w-sm mx-auto text-center bg-transparent mt-10'>
        {/* Avatar */}
        <div className='w-full aspect-square bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden mb-8 shadow-xl'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={400}
                height={400}
                className='w-full h-full object-cover'
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className='px-4'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                {currentTestimonial.name}
              </h2>
              
              <p className='text-xs font-bold tracking-widest uppercase text-[#FF6B00] mb-4'>
                {currentTestimonial.title}
              </p>
              
              <p className='text-black dark:text-gray-300 text-base leading-relaxed mb-8'>
                {currentTestimonial.description}
              </p>
              
              <div className='mt-8 pt-6 border-t border-border/40 flex justify-end space-x-4'>
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  url ? (
                    <Link
                      key={label}
                      href={url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-12 h-12 bg-gray-900 dark:bg-white/10 rounded-full flex items-center justify-center transition-colors hover:bg-[#043b73] dark:hover:bg-[#043b73] hover:scale-105 cursor-pointer'
                      aria-label={label}
                    >
                      <IconComponent className='w-5 h-5 text-white dark:text-white' />
                    </Link>
                  ) : null
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className='flex justify-center items-center gap-6 mt-12 mb-8'>
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label='Previous testimonial'
          className='w-12 h-12 rounded-full bg-gray-100 dark:bg-card border border-gray-300 dark:border-white/10 shadow-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 transition-all cursor-pointer hover:scale-105'
        >
          <ChevronLeft className='w-6 h-6 text-gray-700 dark:text-white' />
        </button>

        {/* Dots */}
        <div className='flex gap-3'>
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 cursor-pointer",
                index === currentIndex
                  ? "bg-[#043b73] scale-125 md:w-8"
                  : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500"
              )}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label='Next testimonial'
          className='w-12 h-12 rounded-full bg-gray-100 dark:bg-card border border-gray-300 dark:border-white/10 shadow-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 transition-all cursor-pointer hover:scale-105'
        >
          <ChevronRight className='w-6 h-6 text-gray-700 dark:text-white' />
        </button>
      </div>
    </div>
  );
}
