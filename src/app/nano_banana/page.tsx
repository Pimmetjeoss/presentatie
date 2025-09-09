"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Timeline } from "./components/timeline";

// Image Grid component with overlay functionality
interface ImageGridProps {
  images: { src: string; alt: string }[];
  overlayImage: string;
  title: string;
}

function ImageGrid({ images, overlayImage, title }: ImageGridProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
            className={`rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] ${
              index === 2 ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''
            }`}
            onClick={index === 2 ? () => setShowOverlay(true) : undefined}
          />
        ))}
      </div>
      
      {/* Overlay */}
      {showOverlay && (
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 rounded-lg"
          onClick={() => setShowOverlay(false)}
        >
          <div className="relative w-full h-full p-4">
            <Image
              src={overlayImage}
              alt={`${title} overlay`}
              width={800}
              height={600}
              className="rounded-lg object-cover w-full h-full shadow-2xl"
            />
            <button 
              className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 text-black font-bold transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setShowOverlay(false);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TimelineDemo() {
  const data = [
    {
      title: "Test",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Dit is een test entry voor de timeline.
          </p>
          <ImageGrid 
            images={[
              { src: "https://assets.aceternity.com/templates/startup-1.webp", alt: "test template" },
              { src: "https://assets.aceternity.com/templates/startup-2.webp", alt: "test template" },
              { src: "https://assets.aceternity.com/templates/startup-3.webp", alt: "test template" }
            ]}
            overlayImage="https://assets.aceternity.com/templates/startup-4.webp"
            title="Test"
          />
        </div>
      ),
    },
    {
      title: "mijzelf",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Informatie over mijzelf en mijn werk.
          </p>
          <ImageGrid 
            images={[
              { src: "https://assets.aceternity.com/pro/hero-sections.png", alt: "mijzelf template" },
              { src: "https://assets.aceternity.com/features-section.png", alt: "mijzelf template" },
              { src: "https://assets.aceternity.com/pro/bento-grids.png", alt: "mijzelf template" }
            ]}
            overlayImage="https://assets.aceternity.com/cards.png"
            title="mijzelf"
          />
        </div>
      ),
    },
    {
      title: "Stefan",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Informatie over Stefan.
          </p>
          <ImageGrid 
            images={[
              { src: "https://assets.aceternity.com/pro/bento-grids.png", alt: "Stefan template" },
              { src: "https://assets.aceternity.com/cards.png", alt: "Stefan template" },
              { src: "https://assets.aceternity.com/pro/hero-sections.png", alt: "Stefan template" }
            ]}
            overlayImage="https://assets.aceternity.com/features-section.png"
            title="Stefan"
          />
        </div>
      ),
    },
    {
      title: "Sarah",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Informatie over Sarah.
          </p>
          <ImageGrid 
            images={[
              { src: "https://assets.aceternity.com/templates/startup-3.webp", alt: "Sarah template" },
              { src: "https://assets.aceternity.com/templates/startup-4.webp", alt: "Sarah template" },
              { src: "https://assets.aceternity.com/pro/bento-grids.png", alt: "Sarah template" }
            ]}
            overlayImage="https://assets.aceternity.com/pro/hero-sections.png"
            title="Sarah"
          />
        </div>
      ),
    },
    {
      title: "René",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Informatie over René.
          </p>
          <ImageGrid 
            images={[
              { src: "https://assets.aceternity.com/pro/hero-sections.png", alt: "René template" },
              { src: "https://assets.aceternity.com/features-section.png", alt: "René template" },
              { src: "https://assets.aceternity.com/templates/startup-1.webp", alt: "René template" }
            ]}
            overlayImage="https://assets.aceternity.com/templates/startup-2.webp"
            title="René"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
