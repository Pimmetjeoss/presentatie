'use client'

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const pages = [
  {
    leftBgImage: '/Claude_AI_symbol.png',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Een briljant BREIN',
      description: 'Maar met een briljant alleen kom je niet zover. Het is en blijft een leuke gimmick die je af en toe kan helpen.',
    },
  },
  {
    leftBgImage: null,
    rightBgImage: '/MCP1.jpg',
    leftContent: {
      heading: 'Resources & Tools',
      description: 'Je wil dat een briljant brein ook toegang krijgt tot je databases, applicaties en andere zaken waar je dagelijks mee werkt. Alleen al om de LLM meer context te geven.',
    },
    rightContent: null,
  },
  {
    leftBgImage: '/remixed_image_1757415886_0.png',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Stephen Hawking',
      description: 'Briljant brein maar kon door zijn ziekte hier niet veel mee. Kreeg een spraakcomputer (Tool) en kreeg uitgebreide toegang tot de beste universiteiten (Resources) van de wereld. Deze combinatie heeft vele nieuwe baanbrekende theorieën opgeleverd.',
    },
  },
  {
    leftBgImage: null,
    rightBgImage: '/remixed_image_1757330838_0.png',
    leftContent: {
      heading: 'Model Context Protocol',
      description: 'is een open standaard die LLMs verbindt met externe datasources en tools. Het werkt als een universele "vertaler" waardoor LLMs realtime toegang krijgen tot bestanden, databases, APIs en andere systemen',
    },
    rightContent: null,
  },
  {
    leftBgImage: '/remixed_image_1757396224_0.png',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Hoe werkt het?',
      description: 'Je download een klein softwarepakket, hierin staat welke tools en resources iedere "stekker" heeft. Er wordt een MCP server opgestart. Hierdoor kan de LLM met de tools en resources HEEN en WEER communiceren.',
    },
  },
];

export default function ScrollAdventure() {
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPages = pages.length;
  const animTime = 1000;
  const scrolling = useRef(false);
  const router = useRouter();

  const navigateUp = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  const navigateDown = () => {
    if (currentPage < numOfPages) setCurrentPage(p => p + 1);
  };

  const handleWheel = (e: WheelEvent) => {
    if (scrolling.current) return;
    scrolling.current = true;
    e.deltaY > 0 ? navigateDown() : navigateUp();
    setTimeout(() => (scrolling.current = false), animTime);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (scrolling.current) return;
    if (e.key === 'ArrowUp') {
      scrolling.current = true;
      navigateUp();
      setTimeout(() => (scrolling.current = false), animTime);
    } else if (e.key === 'ArrowDown') {
      scrolling.current = true;
      navigateDown();
      setTimeout(() => (scrolling.current = false), animTime);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]);

  return (
    <div className="relative overflow-hidden h-screen bg-black">
      {pages.map((page, i) => {
        const idx = i + 1;
        const isActive = currentPage === idx;
        const upOff = 'translateY(-100%)';
        const downOff = 'translateY(100%)';
        const leftTrans = isActive ? 'translateY(0)' : downOff;
        const rightTrans = isActive ? 'translateY(0)' : upOff;

        return (
          <div key={idx} className="absolute inset-0">
            {/* Left Half */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full transition-transform duration-[1000ms]"
              style={{ transform: leftTrans }}
            >
              <div
                className={`w-full h-full bg-center bg-no-repeat ${idx === numOfPages && page.leftBgImage ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`}
                style={{ 
                  backgroundImage: page.leftBgImage ? `url(${page.leftBgImage})` : undefined,
                  backgroundColor: page.leftBgImage === '/Claude_AI_symbol.png' ? '#F5E6D3' : 
                                  (page.leftBgImage?.includes('remixed_image') ? '#F5E6D3' : '#2C3E50'),
                  backgroundSize: page.leftBgImage === '/Claude_AI_symbol.png' ? '50%' : 
                                  (page.leftBgImage?.includes('remixed_image') ? 'contain' : 'cover')
                }}
                onClick={() => {
                  if (idx === numOfPages && page.leftBgImage) {
                    router.push('/ai-agents1');
                  }
                }}
              >
                <div className="flex flex-col items-center justify-center h-full p-8" style={{ color: '#D2691E', fontFamily: 'Courier New' }}>
                  {page.leftContent && (
                    <>
                      <h2 className="text-8xl uppercase mb-4 text-center">
                        {page.leftContent.heading}
                      </h2>
                      <p className="text-4xl text-center">
                        {page.leftContent.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Half */}
            <div
              className="absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-[1000ms]"
              style={{ transform: rightTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: page.rightBgImage ? `url(${page.rightBgImage})` : undefined,
                  backgroundColor: !page.rightBgImage ? '#2C3E50' : 
                                  (page.rightBgImage?.includes('MCP') || page.rightBgImage?.includes('remixed_image') ? '#F5E6D3' : undefined),
                  backgroundSize: page.rightBgImage?.includes('MCP') || page.rightBgImage?.includes('remixed_image') ? 'contain' : 'cover'
                }}
              >
                <div className="flex flex-col items-center justify-center h-full p-8" style={{ color: '#D2691E', fontFamily: 'Courier New' }}>
                  {page.rightContent && (
                    <>
                      <h2 className="text-8xl uppercase mb-4 text-center">
                        {page.rightContent.heading}
                      </h2>
                      {typeof page.rightContent.description === 'string' ? (
                        <p className="text-4xl text-center">
                          {page.rightContent.description}
                        </p>
                      ) : (
                        <div className="text-4xl text-center">
                          {page.rightContent.description}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}