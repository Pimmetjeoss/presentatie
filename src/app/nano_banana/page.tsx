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
  const [clickedImages, setClickedImages] = useState<Set<number>>(new Set());
  const [showOverlay, setShowOverlay] = useState(false);

  // Define the visible and hidden image pairs for Prompts section
  const imagePairs = [
    { 
      visible: "https://assets.aceternity.com/templates/startup-1.webp",
      hidden: "https://github.com/pixegami/nano-banana-prompt-guide/blob/main/src/output/realistic_image_1.png?raw=true",
      alt: "template 1"
    },
    { 
      visible: "https://assets.aceternity.com/templates/startup-3.webp",
      hidden: "https://github.com/pixegami/nano-banana-prompt-guide/blob/main/src/output/illustration_1.png?raw=true",
      alt: "template 2"
    },
    { 
      visible: "https://assets.aceternity.com/templates/startup-1.webp",
      hidden: "https://github.com/pixegami/nano-banana-prompt-guide/blob/main/src/output/product_photo_3.png?raw=true",
      alt: "template 3"
    },
    { 
      visible: "https://assets.aceternity.com/templates/startup-3.webp",
      hidden: "https://github.com/pixegami/nano-banana-prompt-guide/blob/main/src/output/logo_2.png?raw=true",
      alt: "template 4"
    },
  ];

  const handleImageClick = (index: number) => {
    const newClickedImages = new Set(clickedImages);
    if (newClickedImages.has(index)) {
      newClickedImages.delete(index);
    } else {
      newClickedImages.add(index);
    }
    setClickedImages(newClickedImages);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        {title === "Test" ? (
          // Special handling for Prompts section
          imagePairs.map((pair, index) => (
            <div key={index} className="relative">
              <Image
                src={clickedImages.has(index) ? pair.hidden : pair.visible}
                alt={pair.alt}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer hover:opacity-90 transition-all duration-300"
                onClick={() => handleImageClick(index)}
              />
              {clickedImages.has(index) && (
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  Klik om te verbergen
                </div>
              )}
            </div>
          ))
        ) : (
          // Original behavior for other sections with overlay on 3rd image
          images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className={`rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] ${
                ((title === "Sarah" || title === "Stefan") && index === 1) || (title !== "Sarah" && title !== "Stefan" && index === 2) ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''
              }`}
              onClick={((title === "Sarah" || title === "Stefan") && index === 1) || (title !== "Sarah" && title !== "Stefan" && index === 2) ? () => setShowOverlay(true) : undefined}
            />
          ))
        )}
      </div>
      
      {/* Overlay for other sections */}
      {showOverlay && title !== "Test" && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setShowOverlay(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] p-8">
            <Image
              src={overlayImage}
              alt={`${title} overlay`}
              width={1200}
              height={900}
              className="rounded-lg object-contain max-w-full max-h-[85vh] shadow-2xl"
            />
            <button 
              className="absolute top-2 right-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 text-black font-bold transition-all text-xl"
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
  const handleReneClick = () => {
    window.location.href = '/mcp';
  };

  const data = [
    {
      title: "Prompts",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            
          </p>
          <ImageGrid 
            images={[]}
            overlayImage="https://assets.aceternity.com/templates/startup-4.webp"
            title="Test"
          />
        </div>
      ),
    },
    {
      title: "Aan de hand van beelden",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            
          </p>
          <ImageGrid 
            images={[
              { src: "/man.jpeg", alt: "mijzelf template" },
              { src: "/cap.jpeg", alt: "mijzelf template" },
              { src: "/soda.jpeg", alt: "mijzelf template" },
              { src: "/brown_jacket.jpeg", alt: "mijzelf template" }
            ]}
            overlayImage="/remixed_image_1757400081_0.png"
            title="mijzelf"
          />
        </div>
      ),
    },
    {
      title: "Producten",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            
          </p>
          <ImageGrid 
            images={[
              { src: "https://assets.aceternity.com/pro/bento-grids.png", alt: "Stefan template" },
              { src: "/contiweb_machine.png", alt: "Stefan template" },
                      ]}
            overlayImage="/new_machine.png"
            title="Stefan"
          />
        </div>
      ),
    },
    {
      title: "Stefan",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            
          </p>
          <ImageGrid 
            images={[
              { src: "/VanHalen05.jpg", alt: "Sarah template" },
              { src: "/van_halen_concert.jpg", alt: "Sarah template" },
            ]}
            overlayImage="/remixed_image_1757399811_0.png"
            title="Sarah"
          />
        </div>
      ),
    },
    {
      title: "Luuk",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            .
          </p>
          <ImageGrid 
            images={[
              { src: "/contiweb_gebouw.jpg", alt: "René template" },
              { src: "/markt.jpg", alt: "René template" },
              { src: "https://assets.aceternity.com/templates/startup-1.webp", alt: "René template" }
            ]}
            overlayImage="https://assets.aceternity.com/templates/startup-2.webp"
            title="René"
          />
        </div>
      ),
      onClick: handleReneClick,
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
