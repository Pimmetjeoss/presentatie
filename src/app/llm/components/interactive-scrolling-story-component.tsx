"use client";

import React, { useState, useEffect, useRef } from 'react';

// --- Data for each slide ---
const slidesData = [
  {
    title: "Wat is een LLM?",
    description: "Een Large Language Model is een AI-systeem dat menselijke taal begrijpt en genereert. Het is getraind op miljarden teksten en kan daardoor vragen beantwoorden, teksten schrijven, vertalen en programmeren. Bekende voorbeelden zijn ChatGPT, Claude en Gemini - digitale assistenten waarmee je in gewone taal kunt communiceren.",
    image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#fff100",
    textColor: "#000000",
  },
  {
    title: "L(ARGE) LM",
    description: "Het woord Large verwijst naar de enorme schaal van deze modellen. LLM's bevatten miljarden of zelfs triljoenen parameters - dit zijn de instellingen die bepalen hoe het model reageert op input. Deze grootschaligheid stelt de modellen in staat om complexe verbanden in taal te leren en genuanceerde antwoorden te geven. Hoe groter het model, hoe beter het meestal presteert bij diverse taken, van creatief schrijven tot technische probleemoplossing.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#fff100",
    textColor: "#000000",
  },
  {
    title: "LL(anguage)M",
    description: "Language benadrukt dat deze modellen specifiek gericht zijn op het begrijpen en genereren van natuurlijke menselijke taal. Ze zijn getraind op teksten in vele talen en kunnen daardoor vertalen, grammaticale fouten corrigeren, schrijfstijlen aanpassen en zelfs programmeercode genereren. Het taalaspect maakt LLM's zo veelzijdig - ze kunnen communiceren zoals mensen dat doen, met context, nuance en creativiteit.",
    image: "https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1974&auto=format&fit=crop",
    bgColor: "#fff100",
    textColor: "#000000",
  },
  {
    title: "LLM(ODEL)",
    description: "Een Model in AI-context is een wiskundig systeem dat geleerd heeft om voorspellingen te doen gebaseerd op patronen in trainingsdata. LLM's zijn getraind door miljoenen tekstvoorbeelden te analyseren en te leren welke woorden waarschijnlijk na elkaar komen. Dit stelt hen in staat om coherente, relevante teksten te genereren die aansluiten bij de context van een gesprek of vraag. Het model functioneert als een zeer geavanceerde voorspellingsmachine voor taal.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#fff100",
    textColor: "#000000",
  },
  {
    title: "De werking in het kort",
    description: "Stel je voor dat een LLM net zo werkt als een heel slimme vriend die altijd het juiste woord weet. Wanneer je iets zegt, leest de AI eerst heel goed wat je bedoelt. Het snapt de CONTEXT - dus waar het gesprek over gaat, net zoals jij weet of iemand het over voetbal of koken heeft. Daarna RAADT de AI het beste volgende woord, dan weer het volgende woord, en zo verder. Net zoals jij soms al weet wat iemand gaat zeggen voordat ze uitgesproken zijn. De AI is hier alleen veel beter in omdat het miljoenen gesprekken en teksten heeft gelezen tijdens zijn training. Door al die ervaring weet de AI precies welke woorden goed bij elkaar passen en hoe je een handig antwoord geeft. Het is een beetje zoals een zeer ervaren leraar die altijd weet hoe iets uit te leggen, omdat hij het al duizenden keren heeft gedaan.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#fff100",
    textColor: "#000000",
  },
];

// --- Main App Component ---
export function ScrollingFeatureShowcase() {
  // State to track the currently active slide index
  const [activeIndex, setActiveIndex] = useState(0);
  // Ref to the main scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // Ref to the sticky content panel
  const stickyPanelRef = useRef<HTMLDivElement>(null);

  // --- Scroll Handler ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - window.innerHeight;
      const stepHeight = scrollableHeight / slidesData.length;
      const newActiveIndex = Math.min(
        slidesData.length - 1,
        Math.floor(container.scrollTop / stepHeight)
      );
      setActiveIndex(newActiveIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Dynamic styles for the background and text color transitions
  const dynamicStyles = {
    backgroundColor: slidesData[activeIndex].bgColor,
    color: slidesData[activeIndex].textColor,
    transition: 'background-color 0.7s ease, color 0.7s ease',
  };

  // Styles for the grid pattern on the right side
  const gridPatternStyle = {
    '--grid-color': 'rgba(0, 0, 0, 0.12)',
    backgroundImage: `
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
  };

  return (
    <div 
      ref={scrollContainerRef}
      className="h-screen w-full overflow-y-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div style={{ height: `${slidesData.length * 100}vh` }}>
        <div ref={stickyPanelRef} className="sticky top-0 h-screen w-full flex flex-col items-center justify-center" style={dynamicStyles}>
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">
            
            {/* Left Column: Text Content, Pagination & Button */}
            <div className="relative flex flex-col justify-center p-8 md:p-16 border-r border-black/10">
              {/* Pagination Bars */}
              <div className="absolute top-16 left-16 flex space-x-2">
                {slidesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                        const container = scrollContainerRef.current;
                        if(container){
                            const scrollableHeight = container.scrollHeight - window.innerHeight;
                            const stepHeight = scrollableHeight / slidesData.length;
                            container.scrollTo({ top: stepHeight * index, behavior: 'smooth' });
                        }
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                      index === activeIndex ? 'w-12 bg-black/80' : 'w-6 bg-black/20'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="relative h-64 w-full">
                {slidesData.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">{slide.title}</h2>
                    <p className="mt-6 text-lg md:text-xl max-w-md">{slide.description}</p>
                  </div>
                ))}
              </div>

              {/* Get Started Button - Only show on last slide */}
              <div className={`absolute bottom-16 left-16 transition-all duration-700 ease-in-out ${
                activeIndex === slidesData.length - 1
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10 pointer-events-none'
              }`}>
                <a
                  href="/Keywords"
                  className="px-10 py-4 bg-black text-white font-semibold rounded-full uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                  Volgende
                </a>
              </div>
            </div>

            {/* Right Column: Image Content with Grid Background */}
            <div className="hidden md:flex items-center justify-center p-8" style={gridPatternStyle}>
              <div className="relative w-[50%] h-[80vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-black/5">
                <div 
                  className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                  {slidesData.map((slide, index) => (
                    <div key={index} className="w-full h-full">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                        onError={(e) => { 
                          const target = e.target as HTMLImageElement;
                          target.onerror = null; 
                          target.src = `https://placehold.co/800x1200/e2e8f0/4a5568?text=Image+Not+Found`; 
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
