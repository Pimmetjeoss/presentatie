"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Youtube,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    name: " Hive-Mind Intelligence",
    title: "",
    description:
      "Als een bijenvolk voor computers - één hoofdcomputer (koningin) stuurt meerdere hulpprogramma's (werkbijen) aan die samen taken uitvoeren",
    imageUrl:
      "https://images.unsplash.com/photo-1531254722074-92eebf4045ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZXxlbnwwfHwwfHx8MA%3D%3D",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Dynamic Agent Architecture",
    title: "",
    description:
      "Werkbijen die zichzelf reorganiseren als er eentje uitvalt - zoals wanneer een verkenner-bij wegvalt, andere bijen automatisch die rol overnemen",
    imageUrl:
      "https://images.unsplash.com/photo-1601039727490-458d3e7f2799?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVlfGVufDB8fDB8fHww",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "MCP Tools",
    title: "",
    description:
      "Een gereedschapskist met tientallen/honderden verschillende tools - zoals een Zwitsers zakmes voor het aansturen van de digitale werkbijen",
    imageUrl:
      "https://images.unsplash.com/photo-1610167646703-849889407e40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZXxlbnwwfHwwfHx8MA%3D%3D",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Memory System",
    title: "",
    description:
      "Het collectieve geheugen van de korf - zoals hoe bijen informatie opslaan over bloemenvelden voor later gebruik",
    imageUrl:
      "https://images.unsplash.com/photo-1586106901017-b2d588f9c458?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlZXxlbnwwfHwwfHx8MA%3D%3D",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Neural Networks",
    title: "",
    description:
      "Een tiental  slimme werkbijen die kunnen leren van ervaring. Zoals bijen die leren welke bloemen het beste nectar hebben en deze kennis onthouden voor volgende vluchten",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661892981904-2b71e7e79e0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVlfGVufDB8fDB8fHww",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Hooks System",
    title: "",
    description:
      "Automatische acties die vanzelf gebeuren - zoals wanneer een bij nectar vindt en automatisch de dans doet om andere bijen te waarschuwen",
    imageUrl:
      "https://images.unsplash.com/photo-1470938330186-da818256fa34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlZXxlbnwwfHwwfHx8MA%3D%3D",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Context Engineering",
    title: "",
    description:
      "Niet de bijen vertellen wat ze moeten doen maar zelf laten uitzoeken hoe ze het beste honing kunnen vinden. Bijen hebben nu eenmaal een compleet informatieysteem en snappen dit beter dan onze aanwijzigingen",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1691095182210-a1b3c46a31d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJlZXxlbnwwfHwwfHx8MA%3D%3D",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "PRP",
    title: "",
    description:
      "We geven de bijen een kast waarin ze honing kunnen maken. De bijen snappen waarvoor de kast is en gaan zelf op onderzoek uit hoe ze de kast het beste kunnen vullen. ",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664299207508-2dd2b19d8bb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGJlZXxlbnwwfHwwfHx8MA%3D%3D",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "PRP Uitkomst",
    title: "",
    description:
      "Het complete bouwplan wat de bijen hebben gemaakt. Deze wordt vervolgens aan de koning gegeven en deze zal het plan in werking zetten",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1700145523692-37b02e57ae71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGJlZXxlbnwwfHwwfHx8MA%3D%3D",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
];

export interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length
    );

  const currentTestimonial = testimonials[currentIndex];

  const socialIcons = [
    { icon: Github, url: currentTestimonial.githubUrl, label: "GitHub" },
    { icon: Twitter, url: currentTestimonial.twitterUrl, label: "Twitter" },
    { icon: Youtube, url: currentTestimonial.youtubeUrl, label: "YouTube" },
    { icon: Linkedin, url: currentTestimonial.linkedinUrl, label: "LinkedIn" },
  ];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className='hidden md:flex relative items-center'>
        {/* Avatar */}
        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-neutral-800 flex-shrink-0'>
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
        <div 
          className={cn(
            'bg-white dark:bg-card rounded-3xl shadow-2xl p-10 ml-[-80px] z-10 max-w-xl flex-1',
            (currentTestimonial.name === 'PRP' || currentTestimonial.name === 'PRP Uitkomst') && 'cursor-pointer hover:shadow-3xl transition-shadow'
          )}
          onClick={() => {
            if (currentTestimonial.name === 'PRP') {
              window.open('/PRP.pdf', '_blank');
            } else if (currentTestimonial.name === 'PRP Uitkomst') {
              window.open('/prp_uitkomst.pdf', '_blank');
            }
          }}
        >
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className='mb-6'>
                <h2 className='text-6xl font-bold text-gray-900 dark:text-white mb-4'>
                  {currentTestimonial.name}
                </h2>

                <p className='text-sm font-medium text-gray-700 dark:text-gray-500'>
                  {currentTestimonial.title}
                </p>
              </div>

              <p className='text-black dark:text-white text-3xl leading-relaxed'>
                {currentTestimonial.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div 
        className={cn(
          'md:hidden max-w-sm mx-auto text-center bg-transparent',
          (currentTestimonial.name === 'PRP' || currentTestimonial.name === 'PRP Uitkomst') && 'cursor-pointer'
        )}
        onClick={() => {
          if (currentTestimonial.name === 'PRP') {
            window.open('/PRP.pdf', '_blank');
          } else if (currentTestimonial.name === 'PRP Uitkomst') {
            window.open('/prp_uitkomst.pdf', '_blank');
          }
        }}
      >
        {/* Avatar */}
        <div className='w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden mb-6'>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className='text-5xl font-bold text-gray-900 dark:text-white mb-4'>
                {currentTestimonial.name}
              </h2>
              
              <p className='text-sm font-medium text-gray-600 dark:text-gray-300 mb-4'>
                {currentTestimonial.title}
              </p>
              
              <p className='text-black dark:text-white text-2xl leading-relaxed'>
                {currentTestimonial.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className='flex justify-center items-center gap-6 mt-8'>
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label='Previous testimonial'
          className='w-12 h-12 rounded-full bg-gray-100 dark:bg-card border border-gray-300 dark:border-card/40 shadow-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-card/80 transition-colors cursor-pointer'
        >
          <ChevronLeft className='w-6 h-6 text-gray-700 dark:text-gray-50' />
        </button>

        {/* Dots */}
        <div className='flex gap-2'>
          {testimonials.map((_, testimonialIndex) => (
            <button
              key={testimonialIndex}
              onClick={() => setCurrentIndex(testimonialIndex)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors cursor-pointer",
                testimonialIndex === currentIndex
                  ? "bg-gray-900 dark:bg-white"
                  : "bg-gray-400 dark:bg-gray-600"
              )}
              aria-label={`Go to testimonial ${testimonialIndex + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label='Next testimonial'
          className='w-12 h-12 rounded-full bg-gray-100 dark:bg-card border border-gray-300 dark:border-card/40 shadow-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-card/80 transition-colors cursor-pointer'
        >
          <ChevronRight className='w-6 h-6 text-gray-700 dark:text-gray-50' />
        </button>
      </div>
    </div>
  );
}
